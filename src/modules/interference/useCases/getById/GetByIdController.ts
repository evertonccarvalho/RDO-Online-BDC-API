import { Request, Response } from 'express';
import { InterferenceRepository } from '../../repositories/InterferenceRepository';
import { GetByIdUseCase } from './GetByIdUseCase';

class GetByIdController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const { id } = req.params;
			const workId = req.params.workid;
			const getByIdUseCase = new GetByIdUseCase(new InterferenceRepository());
			const interference = await getByIdUseCase.execute(+id, +workId);

			if (!interference) {
				return res.status(404).json({
					message: 'A Equipe não foi encontrada ou não pertence a obra',
				});
			}
			return res.status(200).json(interference);
		} catch (error) {
			return res.status(500).json({ message: 'Erro interno do servidor' });
		}
	}
}

export { GetByIdController };
