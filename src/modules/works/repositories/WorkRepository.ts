import { db } from '../../../api/config/prisma';
import { IWork } from '../interface/IWork';
import { IWorkRepository } from './IWorkRepository';

class WorkRepository implements IWorkRepository {
	public async register(userId: number, work: IWork): Promise<IWork> {
		const newWork = await db.work.create({
			data: {
				active: work.active,
				address: work.address,
				company: work.company,
				createdAt: work.createdAt,
				updatedAt: work.updatedAt,
				logoUrl: work.logoUrl,
				nameResponsible: work.nameResponsible,
				phoneContact: work.phoneContact,
				workDescription: work.workDescription,
				userId: userId, // Use userId diretamente se 'userId' for a chave estrangeira em 'Work'
			},
		});
		return newWork;
	}

	async read(userId: number): Promise<IWork[]> {
		const works = await db.work.findMany({
			where: {
				user: {
					work: {
						some: {
							userId,
						},
					},
				},
			},
		});
		return works;
	}
	async getById(id: number, userId: number): Promise<IWork | null> {
		const work = await db.work.findUnique({
			where: {
				id: id,
				user: {
					id: userId,
				},
			},
		});
		if (!work) {
			return null;
		}

		return work;
	}

	async update(
		id: number,
		userId: number,
		updateWorkData: IWork
	): Promise<void> {
		const work = await db.work.findUnique({
			where: {
				id: id,
				user: {
					id: userId,
				},
			},
		});

		if (!work) {
			throw new Error('A obra não foi encontrada ou não pertence ao usupario');
		}

		await db.work.update({
			where: {
				id: id,
				user: {
					id: userId,
				},
			},
			data: updateWorkData,
		});
	}

	async delete(id: number, userId: number): Promise<void> {
		const work = await db.work.findUnique({
			where: {
				id: id,
				user: {
					id: userId,
				},
			},
		});

		if (!work) {
			throw new Error('A obra não foi encontrada ou não pertence ao usupario');
		}

		await db.work.delete({
			where: {
				id: id,
			},
		});
	}
}

export { WorkRepository };
