import { db } from '../../../../api/config/prisma';
import { IGetByIdWork } from '../interfaces/IGetWorkById';
import { IGetByIdRepository } from './IGetByIdRepository';

class GetByIdRepository implements IGetByIdRepository {
	async getById(id: number, userId: number): Promise<IGetByIdWork | null> {
		const work = await db.work.findUnique({
			where: {
				id: id,
				userId,
			},
		});

		if (!work) {
			return null;
		}

		return work;
	}
}

export { GetByIdRepository };
