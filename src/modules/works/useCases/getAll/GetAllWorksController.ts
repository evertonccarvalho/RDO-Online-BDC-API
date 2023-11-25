import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { GetAllWorksUseCase } from './GetAllWorksUseCase';

class GetAllWorksController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const getAllWorksUseCase = container.resolve(GetAllWorksUseCase);
			const works = await getAllWorksUseCase.execute();
			return res.status(200).json(works);
		} catch (error) {
			return res.status(500).json({ message: 'Erro interno do servidor' });
		}
	}
}

export { GetAllWorksController };
