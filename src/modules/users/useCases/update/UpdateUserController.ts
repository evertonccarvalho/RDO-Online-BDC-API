import { Request, Response } from 'express';
import { UserRepository } from '../../repositories/UserRepository';
import { UpdateUserUseCase } from './UpdateUserUseCase';

class UpdateUserController {
	async handle(req: Request, res: Response): Promise<Response> {
		const { id } = req.params;
		const updatedData = req.body;
		const updateUserUseCase = new UpdateUserUseCase(new UserRepository());

		try {
			await updateUserUseCase.execute(+id, updatedData);
			return res
				.status(200)
				.json({ message: 'Usuário atualizado com sucesso' });
		} catch (error) {
			if (error instanceof Error) {
				if (error.message === 'Usuário não encontrado') {
					return res.status(404).json({ message: 'Usuário não encontrado' });
				}
				return res
					.status(400)
					.json({ message: 'Erro ao atualizar: ' + error.message });
			}
			return res.status(500).json({ message: 'Erro interno do servidor' });
		}
	}
}

export { UpdateUserController };
