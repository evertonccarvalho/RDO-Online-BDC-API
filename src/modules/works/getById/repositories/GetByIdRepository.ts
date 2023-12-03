import { db } from '../../../../api/config/prisma';
import { IWork } from '../../interface/IWork';
import { IGetByIdRepository } from './IGetByIdRepository';

class GetByIdRepository implements IGetByIdRepository {
	async getById(id: number, userId: number): Promise<IWork | null> {
		const work = await db.work.findUnique({
			where: {
				id: id,
				user: {
					id: userId,
				},
			},
		});
		if (!work) {
			return null;
		}

		return work;
	}
}

export { GetByIdRepository };
