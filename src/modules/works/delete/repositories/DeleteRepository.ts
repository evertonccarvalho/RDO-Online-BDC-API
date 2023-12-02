import { db } from '../../../../api/config/prisma';
import { IDeleteRepository } from './IDeleteRepository';

class DeleteRepository implements IDeleteRepository {
	async delete(id: number): Promise<void> {
		await db.work.delete({
			where: {
				id: id,
			},
		});
	}
}

export { DeleteRepository };
