import { db } from '../../../../api/config/prisma';
import { IInterference } from '../interface/IInterference';
import { IInterferenceRepository } from './IInterferenceRepository';

class InterferenceRepository implements IInterferenceRepository {
	public async create(
		interference: IInterference,
		teamId: number,
		workId: number
	): Promise<IInterference> {
		try {
			const newInterference = await db.interference.create({
				data: {
					workId: workId,
					teamId: teamId,
					interferenceResponsible: interference.interferenceResponsible,
					category: interference.category,
					subCategory: interference.subCategory,
					status: interference.status,
				},
			});

			return newInterference;
		} catch (error) {
			// Aqui você pode tratar o erro de alguma forma específica para o seu aplicativo
			throw new Error(`Erro ao criar o turno: ${error}`);
		}
	}

	async read(workId: number): Promise<IInterference[]> {
		const interferences = await db.interference.findMany({
			where: {
				work: {
					Interference: {
						some: {
							workId,
						},
					},
				},
			},
		});
		return interferences;
	}

	async getById(id: number, workId: number): Promise<IInterference | null> {
		const interference = await db.interference.findUnique({
			where: {
				id: id,
				workId: workId,
			},
		});
		if (!interference) {
			return null;
		}

		return interference;
	}

	async update(
		id: number,
		workId: number,
		updatedData: IInterference
	): Promise<void> {
		const interference = await db.interference.findUnique({
			where: {
				id: id,
				workId: workId,
			},
		});

		if (!interference) {
			throw new Error(' Não foi encontrada ou não pertence ao usuario/obra');
		}

		await db.interference.update({
			where: {
				id: id,
				workId: workId,
			},
			data: updatedData,
		});
	}

	async delete(id: number, workId: number): Promise<void> {
		const interference = await db.interference.findUnique({
			where: {
				id: id,
				workId: workId,
			},
		});

		if (!interference) {
			throw new Error('Não foi encontrada ou não pertence a obra?');
		}

		await db.interference.delete({
			where: {
				id: id,
			},
		});
	}
}

export { InterferenceRepository };
