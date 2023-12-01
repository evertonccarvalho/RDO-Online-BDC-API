import { db } from '../../../api/config/prisma';
import { IRegisterUser, IUser } from '../interfaces/User';
import { IUserRepository } from './IUserRepository';

class UserRepository implements IUserRepository {
	async getByEmail(email: string): Promise<IUser | null> {
		const user = await db.user.findFirst({
			where: {
				email,
			},
			select: {
				id: true,
				userName: true,
				email: true,
				avatarUrl: true,
				role: true,
				active: true,
				workId: true,
				work: true,
				createdAt: true,
				updatedAt: true,
			},
		});

		if (!user) {
			return null; // Usuário não encontrado
		}

		return user;
	}

	async update(id: number, updatedUserData: IUser): Promise<void> {
		await db.user.updateMany({
			where: {
				id: id,
			},
			data: updatedUserData,
		});
	}
}

export { UserRepository };
