import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { IObra } from '../../infra/entities/Obra';
import { RegisterObraUseCase } from './RegisterObraUseCase';

class RegisterObraController {
	async handle(req: Request, res: Response): Promise<Response> {
		const work: IObra = req.body;

		const registerUseCase = container.resolve(RegisterObraUseCase);

		await registerUseCase.execute(work);

		return res.status(201).json({ message: 'Registro realizado com sucesso!' });
	}
}

export { RegisterObraController };
