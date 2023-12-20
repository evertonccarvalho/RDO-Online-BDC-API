import { WorkUser } from '@prisma/client';
import { db } from '../../../api/config/prisma';
import { IWorkUserRepository } from './IWorkUserRepository';

class WorkUserRepository implements IWorkUserRepository {
	async create(userId: number, workId: number): Promise<void> {
		await db.workUser.create({
			data: {
				userId: userId,
				workId: workId,
			},
		});
	}

	async findByUserId(userId: number): Promise<WorkUser[]> {
		return await db.workUser.findMany({
			where: {
				userId: userId,
			},
		});
	}

	async findByWorkId(workId: number): Promise<WorkUser[]> {
		return await db.workUser.findMany({
			where: {
				workId: workId,
			},
		});
	}

	async delete(userId: number, workId: number): Promise<void> {
		await db.workUser.deleteMany({
			where: {
				userId: userId,
				workId: workId,
			},
		});
	}
}

export { WorkUserRepository };
