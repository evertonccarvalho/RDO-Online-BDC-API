import { Request, Response } from 'express';
import { WorkUserRepository } from '../../repositories/WorkUserRepository';
import { CreateWorkUserUseCase } from './CreateWorkUserUseCase ';

class CreateWorkUserController {
	async handle(req: Request, res: Response): Promise<Response> {
		const { userId, workId } = req.body;

		const createWorkUserUseCase = new CreateWorkUserUseCase(
			new WorkUserRepository()
		);

		try {
			await createWorkUserUseCase.execute(userId, workId);

			return res.status(201).json({ message: 'WorkUser criado com sucesso' });
		} catch (error) {
			return res.status(400).json({ message: 'Erro ao criar WorkUser' });
		}
	}
}

export { CreateWorkUserController };
