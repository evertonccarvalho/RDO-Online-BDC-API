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
			const work = await getByIdUseCase.execute(+id, +workid, userid);

			if (!work) {
				return res.status(404).json({
					message: 'A obra não foi encontrada ou não pertence ao usuário',
				});
			}
			return res.status(200).json(work);
		} catch (error) {
			return res.status(500).json({ message: 'Erro interno do servidor' });
		}
	}
}

export { GetByIdController };
