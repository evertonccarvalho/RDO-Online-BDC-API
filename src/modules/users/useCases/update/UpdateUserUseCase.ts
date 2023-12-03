import { IUser } from '../../interfaces/IUser';
import { IUserRepository } from '../../repositories/IUserRepository';

class UpdateUserUseCase {
	constructor(private userRepository: IUserRepository) {}

	private async isEmailAlreadyRegistered(email: string): Promise<boolean> {
		const existingUser = await this.userRepository.getByEmail(email);
		return !!existingUser;
	}

	private isValidEmail(email: string): boolean {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	}

	private convertToBoolean(value: string | boolean): boolean {
		if (typeof value === 'string') {
			return value.toLowerCase() === 'true';
		}
		return value;
	}

	private convertToNumber(value: string | number): number {
		if (typeof value === 'string') {
			return parseInt(value, 10); // ou Number(value)
		}
		return value;
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

			updatedUserData.active = this.convertToBoolean(updatedUserData.active);

			await this.userRepository.update(id, updatedUserData);
		} catch (error) {
			if (error instanceof Error) {
				throw new Error(`Erro ao atualizar usuário: ${error.message}`);
			}
		}
	}
}

export { UpdateUserUseCase };
