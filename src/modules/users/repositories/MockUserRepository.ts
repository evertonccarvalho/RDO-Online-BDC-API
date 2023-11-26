import { IRegisterUser, IUser } from '../interfaces/User';
import { IUserRepository } from './IUserRepository';

class MockUserRepository implements IUserRepository {
	private users: IUser[] = [];

	async register(user: IRegisterUser): Promise<void> {
		// Implemente a lógica para adicionar o usuário à lista de usuários mockados
		// Por exemplo:
		this.users.push(user as unknown as IUser); // Considerando que IRegisterUser é uma extensão de IUser
	}

	async getById(userId: number): Promise<IUser | null> {
		// Implemente a lógica para encontrar e retornar um usuário pelo ID
		// Por exemplo:
		return this.users.find((user) => user.id === userId) || null;
	}

	async getByEmail(email: string): Promise<IUser | null> {
		// Implemente a lógica para encontrar e retornar um usuário pelo e-mail
		// Por exemplo:
		return this.users.find((user) => user.email === email) || null;
	}

	async read(): Promise<IUser[]> {
		// Implemente a lógica para retornar todos os usuários
		// Por exemplo:
		return this.users;
	}

	async update(userId: number, updatedUserData: IUser): Promise<void> {
		// Implemente a lógica para atualizar os dados de um usuário
		// Por exemplo:
		const index = this.users.findIndex((user) => user.id === userId);
		if (index !== -1) {
			this.users[index] = updatedUserData;
		}
	}

	async delete(userId: number): Promise<void> {
		// Implemente a lógica para excluir um usuário pelo ID
		// Por exemplo:
		this.users = this.users.filter((user) => user.id !== userId);
	}
}

export { MockUserRepository };
