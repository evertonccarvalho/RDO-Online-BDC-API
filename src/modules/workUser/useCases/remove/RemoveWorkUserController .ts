import { Request, Response } from 'express';
import { WorkUserRepository } from '../../repositories/WorkUserRepository';
import { RemoveWorkUserUseCase } from './RemoveWorkUserUseCase ';

class RemoveWorkUserController {
	async handle(req: Request, res: Response): Promise<Response> {
		const { userId, workId } = req.body;
		const removeWorkUserUseCase = new RemoveWorkUserUseCase(
			new WorkUserRepository()
		);
		
		try {
			await removeWorkUserUseCase.execute(userId, workId);
			return res
				.status(200)
				.json({ message: 'Associação removida com sucesso' });
		} catch (error) {
			if (error instanceof Error) {
				return res
					.status(400)
					.json({ message: `Erro ao remover associação: ${error.message}` });
			}
			return res.status(500).json({ message: 'Erro interno do servidor' });
		}
	}
}
export { RemoveWorkUserController };
