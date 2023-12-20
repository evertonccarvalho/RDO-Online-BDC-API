import { Request, Response } from 'express';
import { ServiceCategoryRepository } from '../../repositories/ServiceCategoryRepository';
import { DeleteUseCase } from './DeleteUseCase';

class DeleteController {
	async handle(req: Request, res: Response): Promise<Response> {
		const { id } = req.params;
		const deleteUseCase = new DeleteUseCase(new ServiceCategoryRepository());

		try {
			await deleteUseCase.execute(+id);

			return res.status(200).json({ message: 'deletado com sucesso' });
		} catch (error) {
			if (error instanceof Error) {
				return res
					.status(404)
					.json({ message: 'não encontrado ou em uso' + error.message });
			}

			return res.status(500).json({ message: 'Erro interno do servidor' });
		}
	}
}

export { DeleteController };
