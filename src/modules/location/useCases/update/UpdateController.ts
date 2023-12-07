import { Request, Response } from 'express';
import { LocationRepository } from '../../repositories/LocationRepository';
import { UpdateUseCase } from './UpdateUseCase';

class UpdateController {
	async handle(req: Request, res: Response): Promise<Response> {
		const { id } = req.params;
		const workId = req.params.workid;
		const updatedData = req.body;
		const updateUseCase = new UpdateUseCase(new LocationRepository());

		try {
			await updateUseCase.execute(+id, +workId, updatedData);

			return res.status(200).json({ message: 'Atualizado com sucesso' });
		} catch (error) {
			if (error instanceof Error) {
				return res
					.status(404)
					.json({ message: 'Não encontrada' + error.message });
			}

			return res.status(500).json({ message: 'Erro interno do servidor' });
		}
	}
}

export { UpdateController };
