import { db } from '../../../../api/config/prisma';
import { IGetAll } from '../interfaces/IGetAll';
import { IGetAllRepository } from './IGetAllRepository';

class GetAllRepository implements IGetAllRepository {
	async read(userId: number): Promise<IGetAll[]> {
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
