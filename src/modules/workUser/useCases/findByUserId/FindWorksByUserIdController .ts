import { Request, Response } from 'express';
import { WorkUserRepository } from '../../repositories/WorkUserRepository';
import { FindWorksByUserIdUseCase } from './FindWorksByUserIdUseCase ';

class FindWorksByUserIdController {
	async handle(req: Request, res: Response): Promise<Response> {
		const findWorksByUserIdUseCase = new FindWorksByUserIdUseCase(
			new WorkUserRepository()
		);
		const { userId } = req.params;
		try {
			const works = await findWorksByUserIdUseCase.execute(Number(userId));
			return res.status(200).json(works);
		} catch (error) {
			return res.status(500).json({ message: 'Erro interno do servidor' });
		}
	}
}

export { FindWorksByUserIdController };
