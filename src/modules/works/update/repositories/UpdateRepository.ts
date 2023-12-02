import { db } from '../../../../api/config/prisma';
import { IUpdateWork } from '../interfaces/IUpdateWork';
import { IUpdateRepository } from './IUpdateRepository';

class UpdateRepository implements IUpdateRepository {
	async update(id: number, updateWorkData: IUpdateWork): Promise<void> {
		await db.work.update({
			where: {
				id: id,
			},
			data: updateWorkData,
		});
	}
}

export { UpdateRepository };
