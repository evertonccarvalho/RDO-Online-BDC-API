import { db } from '../../../../api/config/prisma';
import { IWork } from '../interface/IWork';
import { IWorkRepository } from './IWorkRepository';

class WorkRepository implements IWorkRepository {
	public async register(userId: number, work: IWork): Promise<IWork> {
		try {
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
					workUsers: {
						create: {
							userId: userId,
						},
					},
				},
			});
			return newWork;
		} catch (error) {
			throw new Error(`Erro ao criar o trabalho: ${error}`);
		}
	}

	async read(userId: number): Promise<IWork[]> {
		const works = await db.work.findMany({
			where: {
				workUsers: {
					some: {
						userId,
					},
				},
			},
			include: {
				workUsers: true,
				services: true,
				Team: true,
				Interference: true,
				Shift: true,
				Location: true,
				Effective: true,
			},
		});
		return works;
	}

	async getById(id: number, userId: number): Promise<IWork | null> {
		const work = await db.work.findUnique({
			where: {
				id: id,
				workUsers: {
					some: {
						userId,
					},
				},
			},
			include: {
				workUsers: true,
				services: true,
				Team: true,
				Interference: true,
				Shift: true,
				Location: true,
				Effective: true,
			},
		});
		if (!work) {
			return null;
		}

		return work;
	}

	async update(
		workId: number,
		userId: number,
		updateWorkData: IWork
	): Promise<void> {
		const work = await db.work.findUnique({
			where: {
				id: workId,
				workUsers: {
					some: {
						userId,
					},
				},
			},
		});

		if (!work) {
			throw new Error('A obra não foi encontrada ou não pertence ao usuário');
		}

		await db.work.update({
			where: {
				id: workId,
			},
			data: updateWorkData,
		});
	}

	public async delete(workId: number, userId: number): Promise<void> {
		try {
			const work = await db.work.findUnique({
				where: {
					id: workId,
					workUsers: {
						some: {
							userId,
						},
					},
				},
			});

			if (!work) {
				throw new Error('A obra não foi encontrada ou não pertence ao usuário');
			}

			await db.workUser.deleteMany({
				where: {
					workId: workId,
				},
			});

			await db.work.delete({
				where: {
					id: workId,
				},
			});
		} catch (error) {
			throw new Error(`Erro ao excluir o trabalho: ${error}`);
		}
	}
}

export { WorkRepository };
