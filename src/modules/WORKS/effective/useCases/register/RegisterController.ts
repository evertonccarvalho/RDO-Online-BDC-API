import { Request, Response } from 'express';

import { IEffective } from '../../interface/IEffective';
import { EffectiveRepository } from '../../repositories/EffectiveRepository';
import { RegisterUseCase } from './RegisterUseCase';

class RegisterController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const { teamId } = req.body;
			const workId = req.params.workid;

			const effective: IEffective = req.body;
			const registerUseCase = new RegisterUseCase(new EffectiveRepository());
			await registerUseCase.execute(effective, teamId, +workId);
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
