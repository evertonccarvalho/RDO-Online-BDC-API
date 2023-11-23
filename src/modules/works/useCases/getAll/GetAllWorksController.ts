import { Request, Response } from 'express';
import { GetAllWorksUseCase } from './GetAllWorksUseCase';
import { container } from 'tsyringe';

class GetAllWorksController {
	async handle(req: Request, res: Response): Promise<Response> {
		const getAllWorksUseCase = container.resolve(GetAllWorksUseCase);
		const works = await getAllWorksUseCase.execute();

		return res.status(200).json(works);
	}
}

export { GetAllWorksController };
