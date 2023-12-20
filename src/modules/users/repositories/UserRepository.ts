import { db } from '../../../api/config/prisma';
import { IRegisterUser, IUser } from '../interfaces/IUser';
import { IUserRepository } from './IUserRepository';

class UserRepository implements IUserRepository {
	async register({ userName, email, password }: IRegisterUser): Promise<void> {
		await db.user.create({
			data: {
				userName,
				email,
				password,
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
				createdAt: true,
				updatedAt: true,
				workUsers: true,
			},
		});

		return users;
	}

	async getById(id: number): Promise<IUser | null> {
		const user = await db.user.findUnique({
			where: {
				id: id,
			},
			select: {
				id: true,
				userName: true,
				email: true,
				avatarUrl: true,
				active: true,
				role: true,
				createdAt: true,
				updatedAt: true,
				workUsers: true,
			},
		});
		return user;
	}

	async getByEmail(email: string): Promise<IUser | null> {
		const user = await db.user.findFirst({
			where: {
				email: email,
			},
			include: {
				workUsers: true,
			},
		});

		if (!user) {
			return null;
		}

		return user;
	}

	async update(userId: number, workId: number): Promise<void> {
		const user = await db.user.findUnique({
			where: {
				id: userId,
			},
			include: {
				workUsers: true,
			},
		});

		if (!user) {
			throw new Error('Usuário não encontrado');
		}

		// // Verificar se o usuário já está associado a essa obra
		// const userAlreadyAssociated = user.workUsers.some(
		// 	(workUser) => workUser.workId === workId
		// );

		// if (!userAlreadyAssociated) {
		// 	// Se não estiver associado, conectar ou criar na tabela WorkUser
		// 	await db.workUser.create({
		// 		data: {
		// 			userId: userId,
		// 			workId: workId,
		// 		},
		// 	});
		// }

		// Atualizar outros campos do usuário, exceto workUsers
		await db.user.update({
			where: {
				id: userId,
			},
			data: {
				active: user.active,
				avatarUrl: user.avatarUrl,
				email: user.email,
				role: user.role,
				userName: user.userName,
				// Não incluir workUsers aqui, pois já foi tratado acima
			},
		});
	}

	async delete(id: number): Promise<void> {
		await db.user.delete({
			where: {
				id: id,
			},
		});
	}
}

export { UserRepository };
