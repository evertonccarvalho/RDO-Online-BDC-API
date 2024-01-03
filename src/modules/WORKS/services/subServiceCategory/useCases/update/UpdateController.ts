import { Request, Response } from 'express';
import { SubServiceCategoryRepository } from '../../repositories/SubServiceCategoryRepository';
import { UpdateUseCase } from './UpdateUseCase';

class UpdateController {
	async handle(req: Request, res: Response): Promise<Response> {
		const { id } = req.params;
		const { name, status, serviceCategoryId } = req.body;
		const updateWorkUseCase = new UpdateUseCase(
			new SubServiceCategoryRepository()
		);

		try {
			await updateWorkUseCase.execute(+id, {
				id: 0,
				name: name,
				status: status,
				serviceCategoryId: +serviceCategoryId,
			});

			return res.status(200).json({ message: 'atualizada com sucesso' });
		} catch (error) {
			if (error instanceof Error) {
				return res.status(404).json({ message: 'não encontrada' });
			}

			return res.status(500).json({ message: 'Erro interno do servidor' });
		}
	}
}

export { UpdateController };
