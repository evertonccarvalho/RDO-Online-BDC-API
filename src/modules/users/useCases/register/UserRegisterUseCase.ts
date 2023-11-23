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

	async execute(user: IRegisterUser): Promise<void> {
		// Verifique se o email já está em uso
		const existingUser = await this.userRepository.getByEmail(user.email);

		if (existingUser) {
			throw new Error('E-mail já registrado');
		}

		// Registre o novo usuário
		const saltRounds = 10; // Você pode ajustar o número de rounds conforme necessário
		const hashed_Password = await bcrypt.hash(user.password, saltRounds);
		user.password = hashed_Password;
		await this.userRepository.register(user);
	}
}

export { UserRegisterUseCase };
