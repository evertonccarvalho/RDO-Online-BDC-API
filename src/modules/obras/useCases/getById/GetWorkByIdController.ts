import { Request, Response } from 'express';
import { GetObraByIdUseCase } from './GetWorkByIdUseCase';
import { container } from 'tsyringe';

class GetObraByIdController {
	async handle(req: Request, res: Response): Promise<Response> {
		const { obraId } = req.params;
		const getObraByIdUseCase = container.resolve(GetObraByIdUseCase);
		const obra = await getObraByIdUseCase.execute(+obraId);

		if (!obra) {
			return res.status(404).json({ message: 'Obra não encontrado' });
		}

		return res.status(200).json(obra);
	}
}

export { GetObraByIdController };
