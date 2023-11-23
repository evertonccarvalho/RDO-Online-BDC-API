import { db } from '../../../api/config/prisma';
import { IWork } from '../interfaces/Work';
import { IWorkRepository } from './IWorkRepository';

class WorkRepository implements IWorkRepository {
	async register({
		workDescription,
		company,
		logoUrl,
		address,
		nameResponsible,
		phoneContact,
		active,
	}: IWork): Promise<void> {
		await db.work.create({
			data: {
				workDescription,
				company,
				logoUrl,
				address,
				nameResponsible,
				phoneContact,
				active,
			},
		});
	}

	async read(): Promise<IWork[]> {
		const works = await db.work.findMany();

		return works;
	}

	async getById(workId: number): Promise<IWork | null> {
		const work = await db.work.findUnique({
			where: {
				id: workId,
			},
		});

		if (!work) {
			return null; // Produto não encontrado
		}

		return work;
	}

	async getByIdWithDetails(workId: number): Promise<IWork | null> {
		const work = await db.work.findUnique({
			where: { id: workId },
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

	async update(workId: number, updateWorkData: IWork): Promise<void> {
		await db.work.updateMany({
			where: {
				id: workId,
			},
			data: updateWorkData,
		});
	}

	async delete(workId: number): Promise<void> {
		await db.work.delete({
			where: {
				id: workId,
			},
		});
	}
}

export { WorkRepository };
