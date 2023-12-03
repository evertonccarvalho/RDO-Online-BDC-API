import { db } from '../../../../api/config/prisma';
import { IWork } from '../../interface/IWork';
import { IUpdateRepository } from './IUpdateRepository';

class UpdateRepository implements IUpdateRepository {
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
}

export { UpdateRepository };
