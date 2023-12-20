import { Request, Response } from 'express';
import { DeleteUseCase } from './DeleteUseCase';
import { SubServiceCategoryRepository } from '../../repositories/SubServiceCategoryRepository';

class DeleteController {
	async handle(req: Request, res: Response): Promise<Response> {
		const { id } = req.params;
		const deleteUseCase = new DeleteUseCase(new SubServiceCategoryRepository());

		try {
			await deleteUseCase.execute(+id);

			return res.status(200).json({ message: 'deletado com sucesso' });
		} catch (error) {
			if (error instanceof Error) {
				return res.status(404).json({ message: 'não encontrado ou em uso' });
			}

			return res.status(500).json({ message: 'Erro interno do servidor' });
		}
	}
}

export { DeleteController };
