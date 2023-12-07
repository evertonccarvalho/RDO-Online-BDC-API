import { IShift } from '../../interface/IShift';
import { IShiftRepository } from '../../repositories/IShiftRepository';

class RegisterUseCase {
	constructor(private RegisterRepository: IShiftRepository) {}

	async execute(shift: IShift, teamId: number, workId: number): Promise<void> {
		// Verifica se todos os campos obrigatórios estão presentes e preenchidos

		const requiredFields: (keyof IShift)[] = [
			'teamId',
			'description',
			'feasibility',
			'weatherCondition',
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
			throw new Error('Erro ao registrar obra');
		}
	}
}

export { RegisterUseCase };
