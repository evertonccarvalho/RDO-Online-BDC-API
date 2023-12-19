import { Request, Response } from 'express';
import { WorkRepository } from '../../repositories/WorkRepository';
import { DeleteUseCase } from './DeleteUseCase';

class DeleteController {
	async handle(req: Request, res: Response): Promise<Response> {
		const { id } = req.params;
		const userId = req.user!.id;
		const deleteUseCase = new DeleteUseCase(new WorkRepository());

		try {
			await deleteUseCase.execute(+id, userId);

			return res.status(200).json({ message: 'Obra deletado com sucesso' });
		} catch (error) {
			if (error instanceof Error) {
				return res
					.status(404)
					.json({ message: 'Obra não encontrado' + error.message });
			}

			return res.status(500).json({ message: 'Erro interno do servidor' });
		}
	}
}

export { DeleteController };
