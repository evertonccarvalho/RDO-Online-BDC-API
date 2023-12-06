import { Request, Response } from 'express';
import { GetAllUseCase } from './GetAllUseCase';
import { TeamRepository } from '../../repositories/TeamRepository';

class GetAllController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			// const { workId } = req.body; // vamos tentar melhor a forma de pegar o id da obra
			const workId = req.params.workid;
			const getAllUseCase = new GetAllUseCase(new TeamRepository());
			const teams = await getAllUseCase.execute(Number(workId));

			return res.status(200).json(teams);
		} catch (error) {
			return res.status(500).json({ message: 'Erro interno do servidor' });
		}
	}
}

export { GetAllController };
