// FindWorksByWorkIdController.ts

import { Request, Response } from 'express';
import { WorkUserRepository } from '../../repositories/WorkUserRepository';
import { FindWorksByWorkIdUseCase } from './findByWorkIdUseCase ';

class FindWorksByWorkIdController {
	async handle(req: Request, res: Response): Promise<Response> {
		const findWorksByWorkIdUseCase = new FindWorksByWorkIdUseCase(
			new WorkUserRepository()
		);
		try {
			const { workId } = req.params;
			const works = await findWorksByWorkIdUseCase.execute(+workId);
			return res.status(200).json(works);
		} catch (error) {
			return res.status(500).json({ message: 'Erro interno do servidor' });
		}
	}
}

export { FindWorksByWorkIdController };
