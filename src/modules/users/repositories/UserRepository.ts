import { db } from '../../../api/config/prisma';
import { IRegisterUser, IUser } from '../interfaces/User';
import { IUserRepository } from './IUserRepository';

class UserRepository implements IUserRepository {
	async register({
		userName,
		email,
		password,
		role,
	}: IRegisterUser): Promise<void> {
		await db.user.create({
			data: {
				userName,
				email,
				password,
				role,
				active: true,
			},
		});
	}

	async read(): Promise<IUser[]> {
		const users = await db.user.findMany({
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

		return users;
	}

	async getById(userId: number): Promise<IUser | null> {
		const user = await db.user.findUnique({
			where: {
				id: userId, // Fornecer o valor para o campo id
			},
			select: {
				id: true,
				workId: true,
				userName: true,
				email: true,
				avatarUrl: true,
				role: true,
				active: true,
				work: true,
				createdAt: true,
				updatedAt: true,
			},
		});

		if (!user) {
			return null; // Usuário não encontrado
		}

		// Ajuste a propriedade 'obra' para ser um array ou nulo conforme necessário

		return user;
	}

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

	async update(userId: number, updatedUserData: IUser): Promise<void> {
		await db.user.updateMany({
			where: {
				id: userId,
			},
			data: updatedUserData,
		});
	}

	async delete(userId: number): Promise<void> {
		await db.user.delete({
			where: {
				id: userId,
			},
		});
	}
}

export { UserRepository };
