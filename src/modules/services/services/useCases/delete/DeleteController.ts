import { Request, Response } from 'express';
import { ServiceRepository } from '../../repositories/ServiceRepository';
import { DeleteUseCase } from './DeleteUseCase';

class DeleteController {
	async handle(req: Request, res: Response): Promise<Response> {
		const { id } = req.params;
		const workId = req.params.workid;
		const deleteUseCase = new DeleteUseCase(new ServiceRepository());
		const userId = req.user!.id;
		try {
			await deleteUseCase.execute(+id, +workId, userId);

			return res.status(200).json({ message: 'Obra deletado com sucesso' });
		} catch (error) {
			if (error instanceof Error) {
				return res
					.status(404)
					.json({ message: 'Obra não encontrado ou não pertence ao usuário' });
			}

			return res.status(500).json({ message: 'Erro interno do servidor' });
		}
	}
}

export { DeleteController };
