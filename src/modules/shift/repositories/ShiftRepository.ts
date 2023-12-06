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
			throw new Error(`Erro ao criar o equipe: ${error}`);
		}
	}

	// async read(workId: number): Promise<IService[]> {
	// 	const services = await db.service.findMany({
	// 		where: {
	// 			work: {
	// 				services: {
	// 					some: {
	// 						workId,
	// 					},
	// 				},
	// 			},
	// 		},
	// 	});
	// 	return services;
	// }

	// async getById(id: number, workId: number): Promise<IService | null> {
	// 	const service = await db.service.findUnique({
	// 		where: {
	// 			id: id,
	// 			work: {
	// 				id: workId,
	// 			},
	// 		},
	// 	});
	// 	if (!service) {
	// 		return null;
	// 	}

	// 	return service;
	// }

	// async update(
	// 	id: number,
	// 	workId: number,
	// 	updatedData: IService
	// ): Promise<void> {
	// 	const service = await db.service.findUnique({
	// 		where: {
	// 			id: id,
	// 			work: {
	// 				id: workId,
	// 			},
	// 		},
	// 	});

	// 	if (!service) {
	// 		throw new Error('A obra não foi encontrada ou não pertence ao usupario');
	// 	}

	// 	await db.service.update({
	// 		where: {
	// 			id: id,
	// 			work: {
	// 				id: workId,
	// 			},
	// 		},
	// 		data: updatedData,
	// 	});
	// }

	// async delete(id: number, workId: number): Promise<void> {
	// 	const service = await db.service.findUnique({
	// 		where: {
	// 			id: id,
	// 			work: {
	// 				id: workId,
	// 			},
	// 		},
	// 	});

	// 	if (!service) {
	// 		throw new Error('A obra não foi encontrada ou não pertence ao usupario');
	// 	}

	// 	await db.service.delete({
	// 		where: {
	// 			id: id,
	// 		},
	// 	});
	// }
}

export { ShiftRepository };
