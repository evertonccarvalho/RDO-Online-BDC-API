import { Request, Response } from 'express';
import { UserRepository } from '../../repositories/UserRepository';
import { GetUserByIdUseCase } from './GetUserByIdUseCase';

class GetUserByIdController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const { id } = req.params;
			const getUserByIdUseCase = new GetUserByIdUseCase(new UserRepository());
			const user = await getUserByIdUseCase.execute(+id);

			if (!user) {
				return res.status(404).json({ message: 'Usuário não encontrado' });
			}

			return res.status(200).json(user);
		} catch (error) {
			return res.status(500).json({ message: 'Erro interno do servidor' });
		}
	}
}

export { GetUserByIdController };
