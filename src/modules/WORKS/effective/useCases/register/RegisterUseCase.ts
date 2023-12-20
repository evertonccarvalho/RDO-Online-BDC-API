import { IEffective } from '../../interface/IEffective';
import { IEffectiveRepository } from '../../repositories/IEffectiveRepository';

class RegisterUseCase {
	constructor(private RegisterRepository: IEffectiveRepository) {}

	async execute(
		shift: IEffective,
		teamId: number,
		workId: number
	): Promise<void> {
		// Verifica se todos os campos obrigatórios estão presentes e preenchidos

		const requiredFields: (keyof IEffective)[] = [
			'status',
			'descriptionEffective',
			'type',
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
