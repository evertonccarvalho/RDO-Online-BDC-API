import { db } from '../../../api/config/prisma';
import { IUserLogin } from '../interfaces/user-login';
import { IUserAuthRepository } from './IUserAuthRepository';

class UserAuthRepository implements IUserAuthRepository {
	async login(email: string, password: string): Promise<IUserLogin | null> {
		const user = await db.user.findFirst({
			where: {
				email: email,
			},
		});

		return user;
	}

	async getById(id: number): Promise<IUserLogin | null> {
		const user = await db.user.findUnique({
			where: {
				id: id, // Fornecer o valor para o campo id
			},
		});

		if (!user) {
			return null; // Usuário não encontrado
		}

		// Ajuste a propriedade 'obra' para ser um array ou nulo conforme necessário

		return user;
	}
}
export { UserAuthRepository };
