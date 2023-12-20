import { ITeam } from '../../interface/ITeam';
import { ITeamRepository } from '../../repositories/ITeamRepository';

class RegisterUseCase {
	constructor(private RegisterRepository: ITeamRepository) {}

	async execute(service: ITeam, workId: number): Promise<void> {
		// Verifica se todos os campos obrigatórios estão presentes e preenchidos

		const requiredFields: (keyof ITeam)[] = [
			'status',
			'empresaContratada',
			'descricaoEquipe',
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
			await this.RegisterRepository.create(service, workId);
		} catch (error) {
			throw new Error('Erro ao registrar obra');
		}
	}
}

export { RegisterUseCase };
