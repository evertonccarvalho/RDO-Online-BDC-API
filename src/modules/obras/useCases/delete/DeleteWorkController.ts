import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteObraUseCase } from './DeleteWorkUseCase';

class DeleteObraController {
	async handle(req: Request, res: Response): Promise<Response> {
		const { obraId } = req.params;
		const deleteObraUseCase = container.resolve(DeleteObraUseCase);

		try {
			await deleteObraUseCase.execute(+obraId);

			return res.status(200).json({ message: 'Obra deletado com sucesso' });
		} catch (error) {
			if (error instanceof Error) {
				return res.status(404).json({ message: 'Obra não encontrado' });
			}

			return res.status(500).json({ message: 'Erro interno do servidor' });
		}
	}
}

export { DeleteObraController };
