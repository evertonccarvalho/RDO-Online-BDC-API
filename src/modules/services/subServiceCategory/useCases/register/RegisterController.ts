import { Request, Response } from 'express';
import { ISubServiceCategory } from '../../../interface/IService';
import { SubServiceCategoryRepository } from '../../repositories/SubServiceCategoryRepository';
import { RegisterUseCase } from './RegisterUseCase';

class RegisterController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const { serviceCategoryId } = req.body;
			const subServiceCategory: ISubServiceCategory = req.body;
			const registerUseCase = new RegisterUseCase(
				new SubServiceCategoryRepository()
			);
			await registerUseCase.execute(subServiceCategory, serviceCategoryId);
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
