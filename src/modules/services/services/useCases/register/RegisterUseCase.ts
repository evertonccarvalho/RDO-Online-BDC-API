import { IService } from '../../../interface/IService';
import { IServiceRepository } from '../../repositories/IServiceRepository';

class RegisterUseCase {
	constructor(private RegisterRepository: IServiceRepository) {}

	async execute(
		service: IService,
		workId: number,
		subcategoryId: number
	): Promise<void> {
		// Verifica se todos os campos obrigatórios estão presentes e preenchidos

		const requiredFields: (keyof IService)[] = [
			'serviceDescription',
			'unit',
			'status',
			'subcategoryId',
		];

		const missingFields: string[] = [];
		for (const field of requiredFields) {
			if (!service[field]) {
				missingFields.push(field);
			}
		}

		if (missingFields.length > 0) {
			throw new Error(
				`Os campos obrigatórios (${missingFields}) devem ser preenchidos.`
			);
		}

		try {
			await this.RegisterRepository.create(service, workId, subcategoryId);
		} catch (error) {
			throw new Error('Erro ao registrar obra');
		}
	}
}

export { RegisterUseCase };
