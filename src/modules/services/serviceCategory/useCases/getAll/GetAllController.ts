import { Request, Response } from 'express';
import { ServiceCategoryRepository } from '../../repositories/ServiceCategoryRepository';
import { GetAllUseCase } from './GetAllUseCase';

class GetAllController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const getAllCategories = new GetAllUseCase(
				new ServiceCategoryRepository()
			);
			const categories = await getAllCategories.execute();

			return res.status(200).json(categories);
		} catch (error) {
			return res.status(500).json({ message: 'Erro interno do servidor' });
		}
	}
}

export { GetAllController };
