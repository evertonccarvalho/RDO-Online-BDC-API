import { Request, Response } from 'express';
import { UserRepository } from '../../repositories/UserRepository';
import { DeleteUserUseCase } from './DeleteUserUseCase';

class DeleteUserController {
	async handle(req: Request, res: Response): Promise<Response> {
		const { id } = req.params;
		const deleteUserUseCase = new DeleteUserUseCase(new UserRepository());

		try {
			await deleteUserUseCase.execute(+id);
			return res.status(200).json({ message: 'Usuário excluído com sucesso' });
		} catch (error) {
			if (error instanceof Error) {
				return res
					.status(400)
					.json({ message: 'Usuario tem obras ativas ou ' + error.message });
			}
			return res.status(500).json({ message: 'Erro interno do servidor' });
		}
	}
}

export { DeleteUserController };
