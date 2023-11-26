import { inject, injectable } from 'tsyringe';
import { IUser } from '../../interfaces/User';
import { IUserRepository } from '../../repositories/IUserRepository';

@injectable()
class UpdateUserUseCase {
	constructor(
		@inject('UserRepository')
		private userRepository: IUserRepository
	) {}

	private async isEmailAlreadyRegistered(email: string): Promise<boolean> {
		const existingUser = await this.userRepository.getByEmail(email);
		return !!existingUser;
	}

	private isValidEmail(email: string): boolean {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	}

	async execute(id: number, updatedUserData: IUser): Promise<void> {
		try {
			const user = await this.userRepository.getById(id);

			if (!user) {
				throw new Error('Usuário não encontrado');
			}

			// Verifica se o e-mail foi alterado e se é um e-mail válido
			if (updatedUserData.email && updatedUserData.email !== user.email) {
				if (!this.isValidEmail(updatedUserData.email)) {
					throw new Error('E-mail inválido');
				}

				const isEmailTaken = await this.isEmailAlreadyRegistered(
					updatedUserData.email
				);
				if (isEmailTaken) {
					throw new Error('E-mail já está em uso por outro usuário');
				}
			}

			await this.userRepository.update(id, updatedUserData);
		} catch (error) {
			if (error instanceof Error) {
				throw new Error(`Erro ao atualizar usuário: ${error.message}`);
			}
		}
	}
}

export { UpdateUserUseCase };
