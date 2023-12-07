import { Request, Response } from 'express';

import { RegisterUseCase } from './RegisterUseCase';
import { InterferenceRepository } from '../../repositories/InterferenceRepository';
import { IInterference } from '../../interface/IInterference';

class RegisterController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const { teamId } = req.body;
			const workId = req.params.workid;

			const interference: IInterference = req.body;
			const registerUseCase = new RegisterUseCase(new InterferenceRepository());
			await registerUseCase.execute(interference, teamId, +workId);
			return res
				.status(201)
				.json({ message: 'Registro realizado com sucesso!' });
		} catch (error) {
			if (error instanceof Error) {
				return res
					.status(400)
					.json({ error: 'Erro ao registrar: ' + error.message });
			} else {
				return res
					.status(500)
					.json({ error: 'Erro interno ao processar a requisição' });
			}
		}
	}
}

export { RegisterController };
