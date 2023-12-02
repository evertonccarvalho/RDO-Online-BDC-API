import { db } from '../../../api/config/prisma';
import { IWork } from '../../works/interfaces/Work';
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
				createdAt: true,
				updatedAt: true,
				work: {
					select: {
						id: true,
						workDescription: true,
						company: true,
						nameResponsible: true,
						phoneContact: true,
						address: true,
						active: true,
						createdAt: true,
						updatedAt: true,
						logoUrl: true,
						// Outros campos de trabalho que você deseja selecionar
					},
				},
			},
		});

		return users;
	}

	async getById(id: number): Promise<IUser | null> {
		const userWithWorks = await db.user.findUnique({
			where: {
				id: id,
			},
			include: {
				work: {
					select: {
						id: true,
						workDescription: true,
						company: true,
						nameResponsible: true,
						phoneContact: true,
						address: true,
						active: true,
						createdAt: true,
						updatedAt: true,
						logoUrl: true,
						// Outros campos de trabalho que você deseja selecionar
					},
				},
			},
		});

		if (!userWithWorks) {
			return null; // Retorna null se nenhum usuário for encontrado
		}

		const { work, ...user } = userWithWorks;

		return {
			...user,
			work: work as IWork[], // Certifique-se de que a propriedade work corresponda à interface IWork
		};
	}

	async getByEmail(email: string): Promise<IUser | null> {
		const user = await db.user.findFirst({
			where: {
				email: email,
			},
			include: {
				work: true,
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

	async delete(id: number): Promise<void> {
		await db.user.delete({
			where: {
				id: id,
			},
		});
	}
}

export { UserRepository };
