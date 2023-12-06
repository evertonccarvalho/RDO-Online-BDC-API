import { Request, Response } from 'express';
import { ServiceCategoryRepository } from '../../repositories/ServiceCategoryRepository';
import { UpdateUseCase } from './UpdateUseCase';

class UpdateController {
	async handle(req: Request, res: Response): Promise<Response> {
		const { id } = req.params;
		const updateData = req.body;
		const updateUseCase = new UpdateUseCase(new ServiceCategoryRepository());

		try {
			await updateUseCase.execute(+id, updateData);

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
