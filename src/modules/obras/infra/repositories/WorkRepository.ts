import { db } from '../../../../api/config/prisma';
import { IWork } from '../entities/Work';
import { IWorkRepository } from './IWorkRepository';

class ObraRepository implements IWorkRepository {
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
		const obras = await db.work.findMany();

		return obras;
	}

	async getById(workId: number): Promise<IWork | null> {
		const obra = await db.work.findUnique({
			where: {
				id: workId,
			},
		});

		if (!obra) {
			return null; // Produto não encontrado
		}

		return obra;
	}

	async getByIdWithDetails(workId: number): Promise<IWork | null> {
		const obra = await db.work.findUnique({
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

		return obra;
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

export { ObraRepository };
