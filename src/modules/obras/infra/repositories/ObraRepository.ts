import { db } from '../../../../api/config/prisma';
import { IObra } from '../entities/Obra';
import { IObraRepository } from './IObraRepository';

class ObraRepository implements IObraRepository {
	async register({
		workDescription,
		company,
		logoUrl,
		address,
		nameResponsible,
		phoneContact,
		active,
	}: IObra): Promise<void> {
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

	async read(): Promise<IObra[]> {
		const obras = await db.work.findMany();

		return obras;
	}

	async getById(workId: number): Promise<IObra | null> {
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

	async getByIdWithDetails(workId: number): Promise<IObra | null> {
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

	async update(workId: number, updateWorkData: IObra): Promise<void> {
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
