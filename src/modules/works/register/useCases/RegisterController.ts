import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { IWork } from '../interfaces/IRegisterWork';
import { RegisterUseCase } from './RegisterUseCase';

class RegisterController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const userId = req.user!.id;
			const work: IWork = req.body;
			const registerUseCase = container.resolve(RegisterUseCase);
			await registerUseCase.execute(userId, work);
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
