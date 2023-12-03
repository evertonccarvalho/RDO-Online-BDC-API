import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteUserUseCase } from './DeleteUserUseCase';
import { UserRepository } from '../../repositories/UserRepository';

class DeleteUserController {
	async handle(req: Request, res: Response): Promise<Response> {
		const { id } = req.params;
		const deleteUserUseCase = new DeleteUserUseCase(new UserRepository());

		try {
			await deleteUserUseCase.execute(+id);
			return res.status(200).json({ message: 'Usuário deletado com sucesso' });
		} catch (error) {
			if (error instanceof Error) {
				return res.status(404).json({ message: 'Usuário não encontrado' });
			}
			return res.status(500).json({ message: 'Erro interno do servidor' });
		}
	}
}

export { DeleteUserController };
