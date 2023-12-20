import { ILocation } from '../../interface/ILocation';
import { ILocationRepository } from '../../repositories/ILocationRepository';

class RegisterUseCase {
	constructor(private RegisterRepository: ILocationRepository) {}

	async execute(
		shift: ILocation,
		teamId: number,
		workId: number
	): Promise<void> {
		// Verifica se todos os campos obrigatórios estão presentes e preenchidos

		const requiredFields: (keyof ILocation)[] = [
			'status',
			'descriptionLocation',
			'responsibleLocation',
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
