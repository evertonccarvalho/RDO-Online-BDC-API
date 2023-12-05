import { IServiceCategory } from '../../../interface/IService';
import { IServiceCategoryRepository } from '../../repositories/IServiceCategoryRepository';

class RegisterUseCase {
	constructor(private RegisterRepository: IServiceCategoryRepository) {}

	async execute(serviceCategory: IServiceCategory): Promise<void> {
		// Verifica se todos os campos obrigatórios estão presentes e preenchidos

		const requiredFields: (keyof IServiceCategory)[] = ['name', 'status'];

		const missingFields: string[] = [];
		for (const field of requiredFields) {
			if (!serviceCategory[field]) {
				missingFields.push(field);
			}
		}

		if (missingFields.length > 0) {
			throw new Error(
				`Os campos obrigatórios (${missingFields}) devem ser preenchidos.`
			);
		}

		try {
			await this.RegisterRepository.create(serviceCategory);
		} catch (error) {
			throw new Error('Erro ao registrar obra');
		}
	}
}

export { RegisterUseCase };
