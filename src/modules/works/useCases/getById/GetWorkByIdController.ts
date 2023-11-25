import { Request, Response } from 'express';
import { GetWorkByIdUseCase } from './GetWorkByIdUseCase';
import { container } from 'tsyringe';

class GetWorkByIdController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const { workId } = req.params;
			const getWorkByIdUseCase = container.resolve(GetWorkByIdUseCase);
			const work = await getWorkByIdUseCase.execute(+workId);

			if (!work) {
				return res.status(404).json({ message: 'Obra não encontrada' });
			}

			return res.status(200).json(work);
		} catch (error) {
			return res.status(500).json({ message: 'Erro interno do servidor' });
		}
	}
}

export { GetWorkByIdController };
