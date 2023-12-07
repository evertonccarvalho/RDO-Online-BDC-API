import { Request, Response } from 'express';

import { IShift } from '../../interface/IShift';
import { ShiftRepository } from '../../repositories/ShiftRepository';
import { RegisterUseCase } from './RegisterUseCase';

class RegisterController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const { teamId } = req.body;
			const workId = req.params.workid;

			const shift: IShift = req.body;
			const registerUseCase = new RegisterUseCase(new ShiftRepository());
			await registerUseCase.execute(shift, teamId, +workId);
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
