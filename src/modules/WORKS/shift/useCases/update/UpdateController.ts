import { Request, Response } from 'express';
import { ShiftRepository } from '../../repositories/ShiftRepository';
import { UpdateUseCase } from './UpdateUseCase';

class UpdateController {
	async handle(req: Request, res: Response): Promise<Response> {
		const { id } = req.params;
		const workId = req.params.workid;
		const updatedData = req.body;
		const updateUseCase = new UpdateUseCase(new ShiftRepository());

		try {
			await updateUseCase.execute(+id, +workId, updatedData);

			return res.status(200).json({ message: 'Atualizada com sucesso' });
		} catch (error) {
			if (error instanceof Error) {
				return res.status(404).json({ message: 'Não encontrada' });
			}

			return res.status(500).json({ message: 'Erro interno do servidor' });
		}
	}
}

export { UpdateController };
