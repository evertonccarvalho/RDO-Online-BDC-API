import { db } from '../../../../api/config/prisma';
import { ISubServiceCategory } from '../../interface/IService';
import { ISubServiceCategoryRepository } from './ISubServiceCategoryRepository';

class SubServiceCategoryRepository implements ISubServiceCategoryRepository {
	public async create(
		subServiceCategory: ISubServiceCategory,
		serviceCategoryId: number
	): Promise<ISubServiceCategory> {
		try {
			const newSubCategory = await db.subServiceCategory.create({
				data: {
					name: subServiceCategory.name,
					status: subServiceCategory.status,
					serviceCategoryId: serviceCategoryId,
				},
			});

			return newSubCategory;
		} catch (error) {
			// Aqui você pode tratar o erro de alguma forma específica para o seu aplicativo
			throw new Error(`Erro ao criar o serviço: ${error}`);
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
	// 	updateServiceData: IService
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
	// 		data: updateServiceData,
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

export { SubServiceCategoryRepository };
