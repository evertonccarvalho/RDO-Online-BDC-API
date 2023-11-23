import bcrypt from 'bcrypt';
import { inject, injectable } from 'tsyringe';
import { jwtService } from '../../../../utils/jwt';
import { IUserAuthRepository } from '../../repositories/IUserAuthRepository';

@injectable()
class UserLoginUseCase {
	constructor(
		@inject('UserAuthRepository')
		private userAuthRepository: IUserAuthRepository
	) {}

	async execute(email: string, password: string): Promise<string | null> {
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
				workId: user.workId,
			};

			const token = jwtService.signToken(payload, '15d');
			return token;
		}

		throw new Error('Senha incorreta');
	}
}

export { UserLoginUseCase };
