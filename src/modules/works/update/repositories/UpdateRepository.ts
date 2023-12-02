import { db } from '../../../../api/config/prisma';
import { IUpdateWork } from '../interfaces/IUpdateWork';
import { IUpdateRepository } from './IUpdateRepository';

class UpdateRepository implements IUpdateRepository {
	async update(
		id: number,
		userId: number,
		updateWorkData: IUpdateWork
	): Promise<void> {
		const work = await db.work.findFirst({
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
