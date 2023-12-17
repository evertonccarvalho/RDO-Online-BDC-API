import { db } from '../../../../api/config/prisma';
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
			const work = await db.work.findFirst({
				where: {
					id: workId,
					userId: userId,
				},
			});

			if (!work) {
				throw new Error('O trabalho não pertence ao usuário fornecido');
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
		const services = await db.service.findMany({
			where: {
				AND: [
					{
						workId: workId,
					},
					{
						work: {
							userId: userId,
						},
					},
				],
			},
		});
		return services;
	}

	async getById(
		id: number,
		workId: number,
		userId: number
	): Promise<IService | null> {
		const service = await db.service.findUnique({
			where: {
				id: id,
				AND: [
					{
						workId: workId,
					},
					{
						work: {
							userId: userId,
						},
					},
				],
			},
		});
		if (!service) {
			return null;
		}

		return service;
	}

	async update(
		id: number,
		workId: number,
		userId: number,
		updatedData: IService
	): Promise<void> {
		// Verificar se o serviço pertence ao trabalho e ao usuário
		const service = await db.service.findUnique({
			where: {
				id: id,
				workId: workId,
				work: {
					userId: userId,
				},
			},
		});

		if (!service) {
			throw new Error(
				'O serviço não foi encontrado ou não pertence ao usuário'
			);
		}

		await db.service.update({
			where: {
				id: id,
				workId: workId,
				work: {
					userId: userId,
				},
			},
			data: {
				serviceDescription: service.serviceDescription,
				unit: service.unit,
				totalAmount: service.totalAmount,
				status: service.status,
				workId: workId,
			},
		});
	}

	async delete(id: number, workId: number, userId: number): Promise<void> {
		const service = await db.service.findUnique({
			where: {
				id: id,
				workId: workId,
				work: {
					userId: userId,
				},
			},
		});

		if (!service) {
			throw new Error('A obra não foi encontrada ou não pertence ao usupario');
		}

		await db.service.delete({
			where: {
				id: id,
			},
		});
	}
}

export { ServiceRepository };
