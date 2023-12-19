import { Request, Response } from 'express';
import { ServiceRepository } from '../../repositories/ServiceRepository';
import { GetByIdUseCase } from './GetByIdUseCase';

class GetByIdController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const { id } = req.params;
			const workid = req.params.workid;
			const userid = req.user!.id;

			const getByIdUseCase = new GetByIdUseCase(new ServiceRepository());
			const service = await getByIdUseCase.execute(+id, +workid, userid);

			return res.status(200).json(service);
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

export { GetByIdController };
