import { Request, Response } from 'express';
import { GetAllUseCase } from './GetAllUseCase';
import { InterferenceRepository } from '../../repositories/InterferenceRepository';

class GetAllController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const workId = req.params.workid;
			const getAllUseCase = new GetAllUseCase(new InterferenceRepository());
			const interferences = await getAllUseCase.execute(Number(workId));

			return res.status(200).json(interferences);
		} catch (error) {
			return res.status(500).json({ message: 'Erro interno do servidor' });
		}
	}
}

export { GetAllController };
