import { db } from '../../../../api/config/prisma';
import { IEffective } from '../interface/IEffective';
import { IEffectiveRepository } from './IEffectiveRepository';

class EffectiveRepository implements IEffectiveRepository {
	public async create(
		effective: IEffective,
		teamId: number,
		workId: number
	): Promise<IEffective> {
		try {
			const newEffective = await db.effective.create({
				data: {
					workId: workId,
					descriptionEffective: effective.descriptionEffective,
					type: effective.type,
					status: effective.status,
				},
			});

			return newEffective;
		} catch (error) {
			// Aqui você pode tratar o erro de alguma forma específica para o seu aplicativo
			throw new Error(`Erro ao criar o turno: ${error}`);
		}
	}

	async read(workId: number): Promise<IEffective[]> {
		const effectives = await db.effective.findMany({
			where: {
				work: {
					Effective: {
						some: {
							workId,
						},
					},
				},
			},
		});
		return effectives;
	}

	async getById(id: number, workId: number): Promise<IEffective | null> {
		const effective = await db.effective.findUnique({
			where: {
				id: id,
				workId: workId,
			},
		});
		if (!effective) {
			return null;
		}

		return effective;
	}

	async update(
		id: number,
		workId: number,
		updatedData: IEffective
	): Promise<void> {
		const effective = await db.effective.findUnique({
			where: {
				id: id,
				workId: workId,
			},
		});

		if (!effective) {
			throw new Error(' Não foi encontrada ou não pertence ao usuario/obra');
		}

		await db.effective.update({
			where: {
				id: id,
				workId: workId,
			},
			data: updatedData,
		});
	}

	async delete(id: number, workId: number): Promise<void> {
		const effective = await db.effective.findUnique({
			where: {
				id: id,
				workId: workId,
			},
		});

		if (!effective) {
			throw new Error('Não foi encontrada ou não pertence a obra?');
		}

		await db.effective.delete({
			where: {
				id: id,
			},
		});
	}
}

export { EffectiveRepository };
