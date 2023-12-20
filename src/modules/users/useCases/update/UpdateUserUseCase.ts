import { IUser } from '../../interfaces/IUser';
import { IUserRepository } from '../../repositories/IUserRepository';

class UpdateUserUseCase {
	constructor(private userRepository: IUserRepository) {}

	async execute(
		userId: number,
		workId: number,
		updatedUserData: IUser
	): Promise<void> {
		try {
			const user = await this.userRepository.getById(userId);

			if (!user) {
				throw new Error('Usuário não encontrado');
			}

			if (updatedUserData.email && updatedUserData.email !== user.email) {
				const existingUser = await this.userRepository.getByEmail(
					updatedUserData.email
				);
				if (existingUser) {
					throw new Error('E-mail em uso por outro usuário');
				}
			}

			await this.userRepository.update(userId, workId, updatedUserData);
		} catch (error) {
			if (error instanceof Error) {
				throw new Error(`Erro ao atualizar usuário: ${error.message}`);
			}
		}
	}
}

export { UpdateUserUseCase };
