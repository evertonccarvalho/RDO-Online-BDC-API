import { db } from '../../../api/config/prisma';
import { IShift } from '../interface/IShift';
import { IShiftRepository } from './IShiftRepository';

class ShiftRepository implements IShiftRepository {
	public async create(
		shift: IShift,
		teamId: number,
		workId: number
	): Promise<IShift> {
		try {
			const newShift = await db.shift.create({
				data: {
					workId: workId,
					teamId: teamId,
					description: shift.description,
					feasibility: shift.feasibility,
					weatherCondition: shift.weatherCondition,
					status: shift.status,
				},
			});

			return newShift;
		} catch (error) {
			// Aqui você pode tratar o erro de alguma forma específica para o seu aplicativo
			throw new Error(`Erro ao criar o turno: ${error}`);
		}
	}

	async read(workId: number): Promise<IShift[]> {
		const services = await db.shift.findMany({
			where: {
				work: {
					services: {
						some: {
							workId,
						},
					},
				},
			},
		});
		return services;
	}

	async getById(id: number, workId: number): Promise<IShift | null> {
		const shift = await db.shift.findUnique({
			where: {
				id: id,
				workId: workId,
			},
		});
		if (!shift) {
			return null;
		}

		return shift;
	}

	async update(id: number, workId: number, updatedData: IShift): Promise<void> {
		const shift = await db.shift.findUnique({
			where: {
				id: id,
				workId: workId,
			},
		});

		if (!shift) {
			throw new Error('A obra não foi encontrada ou não pertence ao usupario');
		}

		await db.shift.update({
			where: {
				id: id,
				workId: workId,
			},
			data: updatedData,
		});
	}

	async delete(id: number, teamId: number, workId: number): Promise<void> {
		const shift = await db.shift.findUnique({
			where: {
				id: id,
				workId: workId,
				teamId: teamId,
			},
		});

		if (!shift) {
			throw new Error('Não foi encontrada ou não pertence a obra?');
		}

		await db.shift.delete({
			where: {
				id: id,
			},
		});
	}
}

export { ShiftRepository };
