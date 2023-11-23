import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { IRegisterUser } from '../../interfaces/User';
import { UserRegisterUseCase } from './UserRegisterUseCase';

class UserRegisterController {
	async handle(req: Request, res: Response): Promise<Response> {
		const user: IRegisterUser = req.body;
		const userRegisterUseCase = container.resolve(UserRegisterUseCase);

		try {
			await userRegisterUseCase.execute(user);
			return res
				.status(201)
				.json({ message: 'Registro realizado com sucesso' });
		} catch (error) {
			return res.status(400).json({ message: 'Erro no registro do usuário' });
		}
	}
}

export { UserRegisterController };
