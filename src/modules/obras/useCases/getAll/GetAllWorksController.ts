import { Request, Response } from 'express';
import { GetAllObrasUseCase } from './GetAllWorksUseCase';
import { container } from 'tsyringe';

class GetAllObrasController {
	async handle(req: Request, res: Response): Promise<Response> {
		const getAllObrasUseCase = container.resolve(GetAllObrasUseCase);
		const obras = await getAllObrasUseCase.execute();

		return res.status(200).json(obras);
	}
}

export { GetAllObrasController };
