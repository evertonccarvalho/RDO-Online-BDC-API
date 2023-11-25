import { Request, Response } from 'express';
import { GetAllUsersUseCase } from './GetAllUsersUseCase';
import { container } from 'tsyringe';

class GetAllUsersController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const getAllUsersUseCase = container.resolve(GetAllUsersUseCase);
			const users = await getAllUsersUseCase.execute();

			return res.status(200).json(users);
		} catch (error) {
			return res.status(500).json({ message: 'Erro interno do servidor' });
		}
	}
}

export { GetAllUsersController };
