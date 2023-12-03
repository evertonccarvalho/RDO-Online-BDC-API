import { Request, Response } from 'express';
import {
	IncorrectEmailError,
	IncorrectPasswordError,
} from '../../../../helpers/api-erros';
import { UserAuthRepository } from '../../repositories/UserAuthRepository.1';
import { UserLoginUseCase } from './UserLoginUseCase';

class UserLoginController {
	async handle(req: Request, res: Response): Promise<Response> {
		const { email, password } = req.body;
		const userLoginUseCase = new UserLoginUseCase(new UserAuthRepository());

		try {
			if (!email) {
				return res.status(400).json({ message: 'O e-mail é obrigatório' });
			}

			if (!password) {
				return res.status(400).json({ message: 'A senha é obrigatória' });
			}
			const token = await userLoginUseCase.execute(email, password);

			if (!token) {
				return res.status(401).json({ message: 'Credenciais inválidas' });
			}

			return res.json({ authenticated: true, token });
		} catch (error) {
			console.error('Erro de autenticação:', error);

			if (error instanceof IncorrectPasswordError) {
				return res.status(401).json(error.message);
			}

			if (error instanceof IncorrectEmailError) {
				return res.status(401).json(error.message);
			}

			return res.status(500).json({ message: 'Erro de autenticação!!!!!!!' });
		}
	}
}

export { UserLoginController };
