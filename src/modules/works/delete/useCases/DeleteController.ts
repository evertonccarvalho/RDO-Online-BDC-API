import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteUseCase } from './DeleteUseCase';

class DeleteController {
	async handle(req: Request, res: Response): Promise<Response> {
		const { id } = req.params;
		const deleteUseCase = container.resolve(DeleteUseCase);

		try {
			await deleteUseCase.execute(+id);

			return res.status(200).json({ message: 'Obra deletado com sucesso' });
		} catch (error) {
			if (error instanceof Error) {
				return res.status(404).json({ message: 'Obra não encontrado' });
			}

			return res.status(500).json({ message: 'Erro interno do servidor' });
		}
	}
}

export { DeleteController };
