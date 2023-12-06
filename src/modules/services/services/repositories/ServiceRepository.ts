import { db } from '../../../../api/config/prisma';
import { IService } from '../../interface/IService';
import { IServiceRepository } from './IServiceRepository';

class ServiceRepository implements IServiceRepository {
	public async create(
		service: IService,
		workId: number,
		subcategoryId: number
	): Promise<IService> {
		try {
			const newService = await db.service.create({
				data: {
					serviceDescription: service.serviceDescription,
					unit: service.unit,
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

	async read(workId: number): Promise<IService[]> {
		const services = await db.service.findMany({
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

	async getById(id: number, workId: number): Promise<IService | null> {
		const service = await db.service.findUnique({
			where: {
				id: id,
				work: {
					id: workId,
				},
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
		updatedData: IService
	): Promise<void> {
		const service = await db.service.findUnique({
			where: {
				id: id,
				work: {
					id: workId,
				},
			},
		});

		if (!service) {
			throw new Error('A obra não foi encontrada ou não pertence ao usupario');
		}

		await db.service.update({
			where: {
				id: id,
				work: {
					id: workId,
				},
			},
			data: updatedData,
		});
	}

	async delete(id: number, workId: number): Promise<void> {
		const service = await db.service.findUnique({
			where: {
				id: id,
				work: {
					id: workId,
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
