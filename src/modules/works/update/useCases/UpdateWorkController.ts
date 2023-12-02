import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateWorkUseCase } from './UpdateWorkUseCase';

class UpdateWorkController {
	async handle(req: Request, res: Response): Promise<Response> {
		const { id } = req.params;
		const userId = req.user!.id;
		const updatedWorkData = req.body;
		const updateWorkUseCase = container.resolve(UpdateWorkUseCase);

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

export { UpdateWorkController };
