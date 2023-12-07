import { Request, Response } from 'express';
import { EffectiveRepository } from '../../repositories/EffectiveRepository';
import { GetByIdUseCase } from './GetByIdUseCase';

class GetByIdController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const { id } = req.params;
			const workId = req.params.workid;
			const getByIdUseCase = new GetByIdUseCase(new EffectiveRepository());
			const effective = await getByIdUseCase.execute(+id, +workId);

			if (!effective) {
				return res.status(404).json({
					message: 'Não foi encontrada ou não pertence a obra',
				});
			}
			return res.status(200).json(effective);
		} catch (error) {
			return res.status(500).json({ message: 'Erro interno do servidor' });
		}
	}
}

export { GetByIdController };
