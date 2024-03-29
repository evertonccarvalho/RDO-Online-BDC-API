import { Request, Response } from 'express';
import { WorkRepository } from '../../repositories/WorkRepository';
import { UpdateUseCase } from './UpdateUseCase';

class UpdateController {
	async handle(req: Request, res: Response): Promise<Response> {
		const { id } = req.params;
		const userId = req.user!.id;
		const updatedWorkData = req.body;
		const updateWorkUseCase = new UpdateUseCase(new WorkRepository());

		try {
			await updateWorkUseCase.execute(+id, userId, updatedWorkData);

			return res.status(200).json({ message: 'Obra atualizada com sucesso' });
		} catch (error) {
			if (error instanceof Error) {
				return res.status(404).json({ message: 'Obra não encontrada' });
			}

			return res.status(500).json({ message: 'Erro interno do servidor' });
		}
	}
}

export { UpdateController };
