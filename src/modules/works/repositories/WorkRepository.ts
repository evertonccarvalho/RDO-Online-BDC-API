import { db } from '../../../api/config/prisma';
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
						// Use WorkUser para associar o trabalho ao usuário
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

	public async s(userId: number): Promise<IWork[]> {
		try {
			const user = await db.user.findUnique({
				where: {
					id: userId,
				},
				select: {
					works: {
						include: {
							services: true,
							Team: true,
							Interference: true,
							Shift: true,
							Location: true,
							Effective: true,
						},
					},
				},
			});

			if (!user) {
				return []; // Retorna uma lista vazia se o usuário não for encontrado
			}

			return user.works;
		} catch (error) {
			throw new Error(`Erro ao ler os trabalhos do usuário: ${error}`);
		}
	}

	public async read(): Promise<IWork[]> {
		try {
			const works = await db.work.findMany({
				include: {
					services: true,
					Team: true,
					Interference: true,
					Shift: true,
					Location: true,
					Effective: true,
					workUsers: true,
				},
			});

			return works;
		} catch (error) {
			throw new Error(`Erro ao ler todos os trabalhos: ${error}`);
		}
	}

	async getById(id: number, userId: number): Promise<IWork | null> {
		const work = await db.work.findUnique({
			where: {
				id: id,
			},
			include: {
				users: {
					where: {
						id: userId,
					},
				},
				services: true,
				Team: true,
				Interference: true,
				Shift: true,
				Location: true,
				Effective: true,
				workUsers: true,
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
			},
			include: {
				users: {
					where: {
						id: userId,
					},
				},
			},
		});

		if (!work) {
			throw new Error('A obra não foi encontrada ou não pertence ao usupario');
		}

		await db.work.update({
			where: {
				id: id,
			},
			data: updateWorkData,
		});
	}

	public async delete(workId: number, userId: number): Promise<void> {
		try {
			const work = await db.work.findUnique({
				where: {
					id: workId,
				},
				include: {
					users: {
						where: {
							id: userId,
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
