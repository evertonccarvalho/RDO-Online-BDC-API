import bcrypt from 'bcrypt';
import { inject, injectable } from 'tsyringe';
import { IRegisterUser } from '../../interfaces/User';
import { IUserRepository } from '../../repositories/IUserRepository';

@injectable()
class UserRegisterUseCase {
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

	private async hashPassword(password: string): Promise<string> {
		const saltRounds = 10;
		return bcrypt.hash(password, saltRounds);
	}

	public async execute(
		user: IRegisterUser,
		confirmPassword: string
	): Promise<void> {
		if (!user.userName) {
			throw new Error('Nome de usuário é obrigatório');
		}

		if (!user.email || !this.isValidEmail(user.email)) {
			throw new Error('E-mail inválido');
		}

		if (!user.password || user.password !== confirmPassword) {
			throw new Error('Senha e confirmação de senha não correspondem');
		}

		const isEmailTaken = await this.isEmailAlreadyRegistered(user.email);

		if (isEmailTaken) {
			throw new Error('E-mail já registrado');
		}

		try {
			const hashedPassword = await this.hashPassword(user.password);
			user.password = hashedPassword;

			await this.userRepository.register(user);
		} catch (error) {
			throw new Error(
				`Erro durante a execução do registro do usuário: ${
					(error as Error).message
				}`
			);
		}
	}
}

export { UserRegisterUseCase };
