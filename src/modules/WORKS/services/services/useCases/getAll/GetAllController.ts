import { Request, Response } from 'express';
import { ServiceRepository } from '../../repositories/ServiceRepository';
import { GetAllUseCase } from './GetAllUseCase';

class GetAllController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			// const { workId } = req.body; // vamos tentar melhor a forma de pegar o id da obra
			const userId = req.user!.id;
			const workId = req.params.workid;
			const getAllUseCase = new GetAllUseCase(new ServiceRepository());
			const works = await getAllUseCase.execute(+workId, userId);

			if (!works || works.length === 0) {
				return res
					.status(404)
					.json({ error: 'Nenhum serviço encontrado para este trabalho.' });
			}

			return res.status(200).json(works);
		} catch (error) {
			if (error instanceof Error) {
				return res.status(400).json({ error: error.message });
			} else {
				return res
					.status(500)
					.json({ error: 'Erro interno ao processar a requisição' });
			}
		}
	}
}

export { GetAllController };
