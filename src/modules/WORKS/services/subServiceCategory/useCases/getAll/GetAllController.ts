import { Request, Response } from 'express';
import { SubServiceCategoryRepository } from '../../repositories/SubServiceCategoryRepository';
import { GetAllUseCase } from './GetAllUseCase';

class GetAllController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const getAllSubAcategories = new GetAllUseCase(
				new SubServiceCategoryRepository()
			);
			const subCategories = await getAllSubAcategories.execute();

			return res.status(200).json(subCategories);
		} catch (error) {
			return res.status(500).json({ message: 'Erro interno do servidor' });
		}
	}
}

export { GetAllController };
