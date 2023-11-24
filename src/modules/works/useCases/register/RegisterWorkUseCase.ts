import { inject, injectable } from 'tsyringe';
import { IWorkDTO } from '../../interfaces/Work';
import { IWorkRepository } from '../../repositories/IWorkRepository';

@injectable()
class RegisterWorkUseCase {
	constructor(
		@inject('WorkRepository')
		private workRepository: IWorkRepository
	) {}

	async execute(workDTO: IWorkDTO): Promise<void> {
		// Verifica se todos os campos obrigatórios estão presentes e preenchidos
		const requiredFields: (keyof IWorkDTO)[] = [
			'address',
			'phoneContact',
			'nameResponsible',
			'company',
			'workDescription',
		];

		const missingFields: string[] = [];
		for (const field of requiredFields) {
			if (!workDTO[field]) {
				missingFields.push(field);
			}
		}

		if (missingFields.length > 0) {
			throw new Error(
				`Os campos obrigatórios (${missingFields}) devem ser preenchidos.`
			);
		}

		if (workDTO.address.length < 10) {
			throw new Error('Endereço da obra deve conter pelo menos 10 caracteres');
		}

		try {
			await this.workRepository.register(workDTO);
		} catch (error) {
			throw new Error('Erro ao registrar obra');
		}
	}
}

export { RegisterWorkUseCase };
