import { Request, Response } from 'express';
import { LocationRepository } from '../../repositories/LocationRepository';
import { GetAllUseCase } from './GetAllUseCase';

class GetAllController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const workId = req.params.workid;
			const getAllUseCase = new GetAllUseCase(new LocationRepository());
			const locations = await getAllUseCase.execute(Number(workId));

			return res.status(200).json(locations);
		} catch (error) {
			return res.status(500).json({ message: 'Erro interno do servidor' });
		}
	}
}

export { GetAllController };
