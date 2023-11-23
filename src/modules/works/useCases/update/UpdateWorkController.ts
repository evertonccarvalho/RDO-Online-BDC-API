import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateWorkUseCase } from './UpdateWorkUseCase';

class UpdateWorkController {
	async handle(req: Request, res: Response): Promise<Response> {
		const { workId } = req.params;
		const updatedWorkData = req.body;
		const updateWorkUseCase = container.resolve(UpdateWorkUseCase);

		try {
			await updateWorkUseCase.execute(+workId, updatedWorkData);
			return res.status(200).json({ message: 'Work atualizado com sucesso' });
		} catch (error) {
			if (error instanceof Error) {
				return res.status(404).json({ message: 'Work não encontrado' });
			}

			return res.status(500).json({ message: 'Erro interno do servidor' });
		}
	}
}

export { UpdateWorkController };
