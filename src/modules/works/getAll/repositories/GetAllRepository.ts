import { db } from '../../../../api/config/prisma';
import { IWork } from '../../interface/IWork';
import { IGetAllRepository } from './IGetAllRepository';

class GetAllRepository implements IGetAllRepository {
	async read(userId: number): Promise<IWork[]> {
		const works = await db.work.findMany({
			where: {
				user: {
					work: {
						some: {
							userId,
						},
					},
				},
			},
		});
		return works;
	}
}

export { GetAllRepository };
