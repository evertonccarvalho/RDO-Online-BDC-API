import { Request, Response } from 'express';

import { ITeam } from '../../interface/ITeam';
import { TeamRepository } from '../../repositories/TeamRepository';
import { RegisterUseCase } from './RegisterUseCase';

class RegisterController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const { subcategoryId } = req.body;
			const workId = req.params.workid;

			const team: ITeam = req.body;
			const registerUseCase = new RegisterUseCase(new TeamRepository());
			await registerUseCase.execute(team, +workId);
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
