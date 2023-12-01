import { db } from '../../../api/config/prisma';
import { IWork } from '../interfaces/Work';
import { IWorkRepository } from './IWorkRepository';

class WorkRepository implements IWorkRepository {
	// async register({
	// 	workDescription,
	// 	company,
	// 	address,
	// 	nameResponsible,
	// 	phoneContact,
	// 	active,
	// }: IWork): Promise<void> {
	// 	await db.work.create({
	// 		data: {
	// 			workDescription,
	// 			company,
	// 			address,
	// 			nameResponsible,
	// 			phoneContact,
	// 			active,
	// 		},
	// 	});
	// }

	async register(userId: number, work: IWork): Promise<void> {
		const existingUser = await db.user.findUnique({
			where: { id: userId },
			include: { work: true }, // Verifique se o relacionamento é chamado 'work' em vez de 'works'
		});

		if (!existingUser) {
			throw new Error('Usuário não encontrado');
		}

		await db.work.create({
			data: {
				...work,
				users: {
					connect: { id: userId },
				},
			},
		});
	}

	// async read(): Promise<IWork[]> {
	// 	const works = await db.work.findMany();

	// 	return works;
	// }

	async read(userId: number): Promise<IWork[]> {
		const works = await db.work.findMany({
			where: {
				users: {
					some: {
						id: userId, // Filtra obras onde pelo menos um usuário tem o id correspondente a userId
					},
				},
			},
		});

		return works;
	}

	async getById(id: number): Promise<IWork | null> {
		const work = await db.work.findUnique({
			where: {
				id: id,
			},
		});

		if (!work) {
			return null; // Produto não encontrado
		}

		return work;
	}

	async getByIdWithDetails(id: number): Promise<IWork | null> {
		const work = await db.work.findUnique({
			where: { id: id },
			include: {
				equipes: true, // Inclui as equipes relacionadas
				servicos: true, // Inclui os serviços relacionados
				efetivos: true, // Inclui os efetivos relacionados
				turnos: true, // Inclui os turnos relacionados
				interferencias: true, // Inclui as interferências relacionadas
				locais: true, // Inclui os locais relacionados
			},
		});

		return work;
	}

	async update(id: number, updateWorkData: IWork): Promise<void> {
		await db.work.updateMany({
			where: {
				id: id,
			},
			data: updateWorkData,
		});
	}

	async delete(id: number): Promise<void> {
		await db.work.delete({
			where: {
				id: id,
			},
		});
	}
}

export { WorkRepository };
