import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { IRegisterUser } from '../../interfaces/User';
import { UserRegisterUseCase } from './UserRegisterUseCase';

class UserRegisterController {
	async handle(req: Request, res: Response): Promise<Response> {
		const userData: IRegisterUser = req.body as IRegisterUser;
		const confirmPassword: string = req.body.confirmPassword as string;
		const userRegisterUseCase = container.resolve(UserRegisterUseCase);
		try {
			await userRegisterUseCase.execute(userData, confirmPassword);
			return res
				.status(201)
				.json({ message: 'Registro realizado com sucesso' });
		} catch (error) {
			if (error instanceof Error) {
				if (error.message === 'E-mail já registrado') {
					return res.status(400).json({ message: 'E-mail já registrado' });
				}
				return res
					.status(400)
					.json({ message: 'Erro no registro: ' + error.message });
			}

			return res.status(500).json({ message: 'Erro interno do servidor' });
		}
	}
}

export { UserRegisterController };
