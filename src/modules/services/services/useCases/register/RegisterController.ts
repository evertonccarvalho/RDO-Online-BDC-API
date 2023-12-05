import { Request, Response } from 'express';
import { IService } from '../../../interface/IService';
import { ServiceRepository } from '../../repositories/ServiceRepository';
import { RegisterUseCase } from './RegisterUseCase';

class RegisterController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const { workId, subcategoryId } = req.body;
			const service: IService = req.body;
			const registerUseCase = new RegisterUseCase(new ServiceRepository());
			await registerUseCase.execute(service, workId, subcategoryId);
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
