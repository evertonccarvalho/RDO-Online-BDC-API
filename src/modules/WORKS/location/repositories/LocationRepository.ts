import { db } from '../../../../api/config/prisma';
import { ILocation } from '../interface/ILocation';
import { ILocationRepository } from './ILocationRepository';

class LocationRepository implements ILocationRepository {
	public async create(
		location: ILocation,
		teamId: number,
		workId: number
	): Promise<ILocation> {
		try {
			const newLocation = await db.location.create({
				data: {
					workId: workId,
					descriptionLocation: location.descriptionLocation,
					responsibleLocation: location.responsibleLocation,
					status: location.status,
				},
			});

			return newLocation;
		} catch (error) {
			// Aqui você pode tratar o erro de alguma forma específica para o seu aplicativo
			throw new Error(`Erro ao criar o turno: ${error}`);
		}
	}

	async read(workId: number): Promise<ILocation[]> {
		const locations = await db.location.findMany({
			where: {
				work: {
					Location: {
						some: {
							workId,
						},
					},
				},
			},
		});
		return locations;
	}

	async getById(id: number, workId: number): Promise<ILocation | null> {
		const location = await db.location.findUnique({
			where: {
				id: id,
				workId: workId,
			},
		});
		if (!location) {
			return null;
		}

		return location;
	}

	async update(
		id: number,
		workId: number,
		updatedData: ILocation
	): Promise<void> {
		const location = await db.location.findUnique({
			where: {
				id: id,
				workId: workId,
			},
		});

		if (!location) {
			throw new Error(' Não foi encontrada ou não pertence ao usuario/obra');
		}

		await db.location.update({
			where: {
				id: id,
				workId: workId,
			},
			data: updatedData,
		});
	}

	async delete(id: number, workId: number): Promise<void> {
		const location = await db.location.findUnique({
			where: {
				id: id,
				workId: workId,
			},
		});

		if (!location) {
			throw new Error('Não foi encontrada ou não pertence a obra?');
		}

		await db.location.delete({
			where: {
				id: id,
			},
		});
	}
}

export { LocationRepository };
