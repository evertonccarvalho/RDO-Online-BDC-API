import { ISubServiceCategory } from '../../../interface/IService';
import { ISubServiceCategoryRepository } from '../../repositories/ISubServiceCategoryRepository';

class RegisterUseCase {
	constructor(private RegisterRepository: ISubServiceCategoryRepository) {}

	async execute(
		subServiceCategory: ISubServiceCategory,
		serviceCategoryId: number
	): Promise<void> {
		// Verifica se todos os campos obrigatórios estão presentes e preenchidos

		const requiredFields: (keyof ISubServiceCategory)[] = [
			'name',
			'status',
			'serviceCategoryId',
		];

		const missingFields: string[] = [];
		for (const field of requiredFields) {
			if (!subServiceCategory[field]) {
				missingFields.push(field);
			}
		}

		if (missingFields.length > 0) {
			throw new Error(
				`Os campos obrigatórios (${missingFields}) devem ser preenchidos.`
			);
		}

		try {
			await this.RegisterRepository.create(
				subServiceCategory,
				serviceCategoryId
			);
		} catch (error) {
			throw new Error('Erro ao registrar obra');
		}
	}
}

export { RegisterUseCase };
