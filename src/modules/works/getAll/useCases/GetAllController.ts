import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { GetAllUseCase } from './GetAllUseCase';

class GetAllController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const userId = req.user!.id; // Supondo que o userId seja obtido dos parâmetros da requisição

			const getAllWorksUseCase = container.resolve(GetAllUseCase);
			const works = await getAllWorksUseCase.execute(Number(userId)); // Certifique-se de converter userId para número, se necessário

			return res.status(200).json(works);
		} catch (error) {
			return res.status(500).json({ message: 'Erro interno do servidor' });
		}
	}
}

export { GetAllController };