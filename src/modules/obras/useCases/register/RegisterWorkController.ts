import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { IWork } from '../../infra/entities/Work';
import { RegisterObraUseCase } from './RegisterWorkUseCase';

class RegisterObraController {
	async handle(req: Request, res: Response): Promise<Response> {
		const work: IWork = req.body;

		const registerUseCase = container.resolve(RegisterObraUseCase);

		await registerUseCase.execute(work);

		return res.status(201).json({ message: 'Registro realizado com sucesso!' });
	}
}

export { RegisterObraController };
