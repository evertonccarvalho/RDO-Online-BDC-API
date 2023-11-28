import { db } from '../../../api/config/prisma';
import { IWork } from '../interfaces/Work';
import { IWorkRepository } from './IWorkRepository';

class WorkRepository implements IWorkRepository {
	async register({
		workDescription,
		company,
		address,
		nameResponsible,
		phoneContact,
		active,
	}: IWork): Promise<void> {
		await db.work.create({
			data: {
				workDescription,
				company,
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
