import { db } from '../../../../../api/config/prisma';
import { IService } from '../../interface/IService';
import { IServiceRepository } from './IServiceRepository';

class ServiceRepository implements IServiceRepository {
	public async create(
		service: IService,
		workId: number,
		userId: number,
		subcategoryId: number
	): Promise<IService> {
		try {
			// Verificar se o serviço pertence ao trabalho e ao usuário
			const workUser = await db.workUser.findFirst({
				where: {
					workId: workId,
					userId: userId,
				},
			});

			if (!workUser) {
				throw new Error('O trabalho não pertence ao usuário fornecido');
			}

			// Verificar se o subcategoryId existe na tabela Subcategory
			const subcategory = await db.subServiceCategory.findUnique({
				where: {
					id: subcategoryId,
				},
			});

			if (!subcategory) {
				throw new Error(
					'O subcategoryId fornecido não existe na tabela Subcategory'
				);
			}

			const newService = await db.service.create({
				data: {
					serviceDescription: service.serviceDescription,
					unit: service.unit,
					totalAmount: service.totalAmount,
					status: service.status,
					subcategoryId: subcategoryId,
					workId: workId,
				},
			});

			return newService;
		} catch (error) {
			// Aqui você pode tratar o erro de alguma forma específica para o seu aplicativo
			throw new Error(`Erro ao criar o serviço: ${error}`);
		}
	}

	async read(workId: number, userId: number): Promise<IService[]> {
		try {
			const workUser = await db.workUser.findFirst({
				where: {
					workId: workId,
					userId: userId,
				},
			});

			if (!workUser) {
				throw new Error('O trabalho não pertence ao usuário fornecido');
			}

			const services = await db.service.findMany({
				where: {
					workId: workId,
				},
			});

			if (services.length === 0) {
				throw new Error('O serviço não foi encontrado');
			}

			return services;
		} catch (error) {
			throw new Error(`Erro ao buscar os serviços: ${error}`);
		}
	}

	async getById(
		id: number,
		workId: number,
		userId: number
	): Promise<IService | null> {
		try {
			const workUser = await db.workUser.findFirst({
				where: {
					workId: workId,
					userId: userId,
				},
			});

			if (!workUser) {
				throw new Error('O trabalho não pertence ao usuário fornecido');
			}

			const service = await db.service.findUnique({
				where: {
					id: id,
				},
			});

			if (!service) {
				throw new Error('O serviço não foi encontrado');
			}

			return service;
		} catch (error) {
			throw new Error(`Erro ao buscar os serviços: ${error}`);
		}
	}

	async update(
		id: number,
		workId: number,
		userId: number,
		updatedData: IService
	): Promise<void> {
		try {
			const workUser = await db.workUser.findFirst({
				where: {
					workId: workId,
					userId: userId,
				},
			});

			if (!workUser) {
				throw new Error('O trabalho não pertence ao usuário fornecido');
			}

			const service = await db.service.findUnique({
				where: {
					id: id,
				},
			});

			if (!service) {
				throw new Error('O serviço não foi encontrado');
			}

			await db.service.update({
				where: {
					id: id,
					workId: workId,
				},
				data: {
					serviceDescription: service.serviceDescription,
					unit: service.unit,
					totalAmount: service.totalAmount,
					status: service.status,
					workId: workId,
				},
			});
		} catch (error) {
			throw new Error(`Erro ao buscar os serviços: ${error}`);
		}
	}
	async delete(id: number, workId: number, userId: number): Promise<void> {
		try {
			const workUser = await db.workUser.findFirst({
				where: {
					workId: workId,
					userId: userId,
				},
			});

			if (!workUser) {
				throw new Error('O trabalho não pertence ao usuário fornecido');
			}

			const service = await db.service.findUnique({
				where: {
					id: id,
				},
			});

			if (!service) {
				throw new Error('O serviço não foi encontrado');
			}

			await db.service.delete({
				where: {
					id: id,
				},
			});
		} catch (error) {
			throw new Error(`Erro ao buscar os serviços: ${error}`);
		}
	}

	// async delete(id: number, workId: number, userId: number): Promise<void> {
	// 	const service = await db.service.findUnique({
	// 		where: {
	// 			id: id,
	// 			AND: [
	// 				{
	// 					workId: workId,
	// 				},
	// 				{
	// 					work: {
	// 						users: {
	// 							some: {
	// 								id: userId,
	// 							},
	// 						},
	// 					},
	// 				},
	// 			],
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

export { ServiceRepository };
