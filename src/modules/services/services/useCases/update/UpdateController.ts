import { Request, Response } from 'express';
import { ServiceRepository } from '../../repositories/ServiceRepository';
import { UpdateUseCase } from './UpdateUseCase';

class UpdateController {
	async handle(req: Request, res: Response): Promise<Response> {
		const { id } = req.params;
		const workid = req.params.workid;
		const userid = req.user!.id;
		const updatedData = req.body;
		const updateWorkUseCase = new UpdateUseCase(new ServiceRepository());

		try {
			await updateWorkUseCase.execute(+id, +workid, userid, updatedData);

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
