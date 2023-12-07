import { Request, Response } from 'express';
import { EffectiveRepository } from '../../repositories/EffectiveRepository';
import { GetAllUseCase } from './GetAllUseCase';

class GetAllController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const workId = req.params.workid;
			const getAllUseCase = new GetAllUseCase(new EffectiveRepository());
			const effectives = await getAllUseCase.execute(Number(workId));

			return res.status(200).json(effectives);
		} catch (error) {
			return res.status(500).json({ message: 'Erro interno do servidor' });
		}
	}
}

export { GetAllController };
