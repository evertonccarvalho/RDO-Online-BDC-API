import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateObraUseCase } from './UpdateWorkUseCase';

class UpdateObraController {
	async handle(req: Request, res: Response): Promise<Response> {
		const { obraId } = req.params;
		const updatedObraData = req.body;
		const updateObraUseCase = container.resolve(UpdateObraUseCase);

		try {
			await updateObraUseCase.execute(+obraId, updatedObraData);
			return res.status(200).json({ message: 'Obra atualizado com sucesso' });
		} catch (error) {
			if (error instanceof Error) {
				return res.status(404).json({ message: 'Obra não encontrado' });
			}

			return res.status(500).json({ message: 'Erro interno do servidor' });
		}
	}
}

export { UpdateObraController };
