import { Request, Response } from 'express';
import { UserRepository } from '../../repositories/UserRepository';
import { GetUserByEmailUseCase } from './GetUserByEmailUseCase';

class GetUserByEmailController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const { email } = req.params;
			const getUserByEmailUseCase = new GetUserByEmailUseCase(
				new UserRepository()
			);
			const user = await getUserByEmailUseCase.execute(email);

			if (!user) {
				return res.status(404).json({ message: 'Usuário não encontrado' });
			}

			return res.status(200).json(user);
		} catch (error) {
			return res.status(500).json({ message: 'Erro interno do servidor' });
		}
	}
}

export { GetUserByEmailController };
