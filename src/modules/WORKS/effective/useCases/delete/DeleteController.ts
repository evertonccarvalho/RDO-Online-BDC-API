import { Request, Response } from 'express';
import { EffectiveRepository } from '../../repositories/EffectiveRepository';
import { DeleteUseCase } from './DeleteUseCase';

class DeleteController {
	async handle(req: Request, res: Response): Promise<Response> {
		const { id } = req.params;
		const workId = req.params.workid;
		const deleteUseCase = new DeleteUseCase(new EffectiveRepository());

		try {
			await deleteUseCase.execute(+id, +workId);

			return res.status(200).json({ message: 'deletado com sucesso' });
		} catch (error) {
			if (error instanceof Error) {
				return res.status(404).json({ message: 'não encontrado' });
			}

			return res.status(500).json({ message: 'Erro interno do servidor' });
		}
	}
}

export { DeleteController };
