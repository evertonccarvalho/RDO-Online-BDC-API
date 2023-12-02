import { db } from '../../../../api/config/prisma';
import { IDeleteRepository } from './IDeleteRepository';

class DeleteRepository implements IDeleteRepository {
	async delete(id: number, userId: number): Promise<void> {
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

		await db.work.delete({
			where: {
				id: id,
			},
		});
	}
}

export { DeleteRepository };
