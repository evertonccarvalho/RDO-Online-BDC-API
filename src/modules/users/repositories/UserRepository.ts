import { db } from '../../../api/config/prisma';
import { IWork } from '../../works/interface/IWork';
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
						userId: true,
						// Outros campos de trabalho que você deseja selecionar
					},
				},
			},
		});

		return users;
	}

	async getById(id: number): Promise<IUser | null> {
		const user = await db.user.findUnique({
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
		return user;
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

	async update(id: number, updatedData: IUser): Promise<void> {
		const user = await db.user.findUnique({
			where: {
				id: id,
			},
		});
		if (!user) {
			throw new Error('Usuário não encontrado');
		}
		await db.user.update({
			where: {
				id: id,
			},
			data: updatedData,
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
