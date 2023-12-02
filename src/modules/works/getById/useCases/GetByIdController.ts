import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { GetByIdUseCase } from './GetByIdUseCase';

class GetByIdController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const { id } = req.params;
			const userId = req.user!.id; // Supondo que o userId seja obtido dos parâmetros da requisição

			const getByIdUseCase = container.resolve(GetByIdUseCase);
			const work = await getByIdUseCase.execute(+id, userId);

			if (!work) {
				return res
					.status(404)
					.json({
						message: 'A obra não foi encontrada ou não pertence ao usupario',
					});
			}
			return res.status(200).json(work);
		} catch (error) {
			return res.status(500).json({ message: 'Erro interno do servidor' });
		}
	}
}

export { GetByIdController };
