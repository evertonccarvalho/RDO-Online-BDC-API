import { Request, Response } from 'express';
import { ServiceRepository } from '../../repositories/ServiceRepository';
import { RegisterUseCase } from './RegisterUseCase';

class RegisterController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const { subcategoryId, serviceDescription, unit, status, totalAmount } =
				req.body;
			const workId = req.params.workid;
			const userId = req.user!.id;

			const registerUseCase = new RegisterUseCase(new ServiceRepository());
			await registerUseCase.execute(
				{
					id: 0,
					workId: +workId,
					serviceDescription,
					unit,
					status,
					totalAmount: +totalAmount,
					subcategoryId,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				+workId,
				userId,
				+subcategoryId
			);

			return res
				.status(201)
				.json({ message: 'Registro realizado com sucesso!' });
		} catch (error) {
			if (error instanceof Error) {
				return res
					.status(400)
					.json({ error: 'Erro ao registrar obra: ' + error.message });
			} else {
				return res
					.status(500)
					.json({ error: 'Erro interno ao processar a requisição' });
			}
		}
	}
}

export { RegisterController };
