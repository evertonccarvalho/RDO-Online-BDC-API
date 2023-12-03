import { db } from '../../../api/config/prisma';
import { IUserProfileUpdate } from '../../users/interfaces/IUser';
import { IUserRepository } from './IUserRepository';

class UserRepository implements IUserRepository {
	async update(id: number, updatedUserData: IUserProfileUpdate): Promise<void> {
		const user = await db.user.findUnique({
			where: {
				id: id,
			},
		});

		if (!user) {
			throw new Error('Usuário não encontrado');
		}

		await db.user.updateMany({
			where: {
				id: id,
			},
			data: {
				userName: updatedUserData.userName,
				avatarUrl: updatedUserData.avatarUrl,
				updatedAt: new Date(),
			},
		});
	}
}

export { UserRepository };
