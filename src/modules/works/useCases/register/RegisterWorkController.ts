import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { IWork } from '../../interfaces/Work';
import { RegisterWorkUseCase } from './RegisterWorkUseCase';

class RegisterWorkController {
	async handle(req: Request, res: Response): Promise<Response> {
		const work: IWork = req.body;

		const registerUseCase = container.resolve(RegisterWorkUseCase);

		await registerUseCase.execute(work);

		return res.status(201).json({ message: 'Registro realizado com sucesso!' });
	}
}

export { RegisterWorkController };
