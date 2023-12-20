import { Request, Response } from 'express';
import { GetByIdUseCase } from './GetByIdUseCase';
import { ServiceCategoryRepository } from '../../repositories/ServiceCategoryRepository';

class GetByIdController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const { id } = req.params;

			const getByIdUseCase = new GetByIdUseCase(
				new ServiceCategoryRepository()
			);
			const category = await getByIdUseCase.execute(+id);

			if (!category) {
				return res.status(404).json({
					message: 'A obra não foi encontrada ou não pertence ao usupario',
				});
			}
			return res.status(200).json(category);
		} catch (error) {
			return res.status(500).json({ message: 'Erro interno do servidor' });
		}
	}
}

export { GetByIdController };
