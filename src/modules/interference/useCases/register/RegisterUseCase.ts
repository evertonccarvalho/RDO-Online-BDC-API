import { IInterference } from '../../interface/IInterference';
import { IInterferenceRepository } from '../../repositories/IInterferenceRepository';

class RegisterUseCase {
	constructor(private RegisterRepository: IInterferenceRepository) {}

	async execute(
		shift: IInterference,
		teamId: number,
		workId: number
	): Promise<void> {
		// Verifica se todos os campos obrigatórios estão presentes e preenchidos

		const requiredFields: (keyof IInterference)[] = [
			'teamId',
			'interferenceResponsible',
			'category',
			'subCategory',
			'status',
		];

		const missingFields: string[] = [];
		for (const field of requiredFields) {
			if (!shift[field]) {
				missingFields.push(field);
			}
		}

		if (missingFields.length > 0) {
			throw new Error(
				`Os campos obrigatórios (${missingFields}) devem ser preenchidos.`
			);
		}

		try {
			await this.RegisterRepository.create(shift, teamId, workId);
		} catch (error) {
			throw new Error('Erro ao registrar');
		}
	}
}

export { RegisterUseCase };
