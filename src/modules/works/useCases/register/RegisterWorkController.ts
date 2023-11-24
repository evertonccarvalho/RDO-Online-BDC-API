import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { IWorkDTO } from '../../interfaces/Work';
import { RegisterWorkUseCase } from './RegisterWorkUseCase';

class RegisterWorkController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const work: IWorkDTO = req.body;
			const registerUseCase = container.resolve(RegisterWorkUseCase);
			await registerUseCase.execute(work);
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

export { RegisterWorkController };
