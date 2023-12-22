import { Request, Response } from 'express';
import { ServiceRepository } from '../../repositories/ServiceRepository';
import { UpdateUseCase } from './UpdateUseCase';

class UpdateController {
	async handle(req: Request, res: Response): Promise<Response> {
		const { id } = req.params;
		const userId = req.user!.id;
		const workId = req.params.workid;
		const { subcategoryId, serviceDescription, unit, status, totalAmount } =
			req.body;
		const updateUseCase = new UpdateUseCase(new ServiceRepository());

		try {
			await updateUseCase.execute(+id, +workId, userId, {
				id: 0,
				workId: +workId,
				serviceDescription,
				unit,
				status,
				totalAmount: +totalAmount,
				subcategoryId: +subcategoryId,
				createdAt: new Date(),
				updatedAt: new Date(),
			});

			return res
				.status(200)
				.json({ message: 'Serviço atualizado com sucesso' });
		} catch (error) {
			if (error instanceof Error) {
				return res.status(404).json({ message: error.message });
			}

			return res.status(500).json({ message: 'Erro interno do servidor' });
		}
	}
}

export { UpdateController };
