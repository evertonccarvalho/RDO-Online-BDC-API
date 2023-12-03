import { Request, Response } from 'express';
import { UserRepository } from '../../repositories/UserRepository';
import { GetAllUsersUseCase } from './GetAllUsersUseCase';

class GetAllUsersController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const getAllUsersUseCase = new GetAllUsersUseCase(new UserRepository());
			const users = await getAllUsersUseCase.execute();

			return res.status(200).json(users);
		} catch (error) {
			return res.status(500).json({ message: 'Erro interno do servidor' });
		}
	}
}

export { GetAllUsersController };
