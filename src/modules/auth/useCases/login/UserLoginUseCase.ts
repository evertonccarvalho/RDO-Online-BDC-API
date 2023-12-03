import bcrypt from 'bcrypt';
import {
	IncorrectEmailError,
	IncorrectPasswordError,
} from '../../../../helpers/api-erros';
import { jwtService } from '../../../../utils/jwt';
import { IUserAuthRepository } from '../../repositories/IUserAuthRepository';

const JWT_EXPIRATION_TIME = '15d';

class UserLoginUseCase {
	constructor(private userAuthRepository: IUserAuthRepository) {}

	private isValidEmail(email: string): boolean {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	}

	async execute(email: string, password: string): Promise<string | null> {
		if (!email || !this.isValidEmail(email)) {
			throw new IncorrectEmailError('O e-mail é inválido');
		}

		const user = await this.userAuthRepository.login(email, password);

		if (!user) {
			return null;
		}

		const passwordMatch = await bcrypt.compare(password, user.password);

		if (passwordMatch) {
			const payload = {
				id: user.id,
				userName: user.userName,
				email: user.email,
				role: user.role,
				active: user.active,
			};

			const token = jwtService.signToken(payload, JWT_EXPIRATION_TIME);
			return token;
		}
		throw new IncorrectPasswordError('As credenciais estão inválidas');
	}
}

export { UserLoginUseCase };
