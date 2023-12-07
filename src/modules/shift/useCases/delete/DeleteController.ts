import { Request, Response } from 'express';
import { ShiftRepository } from '../../repositories/ShiftRepository';
import { DeleteUseCase } from './DeleteUseCase';

class DeleteController {
	async handle(req: Request, res: Response): Promise<Response> {
		const { id } = req.params;
		const { teamId } = req.body;
		const workId = req.params.workid;
		const deleteUseCase = new DeleteUseCase(new ShiftRepository());

		try {
			await deleteUseCase.execute(+id, teamId, +workId);

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
