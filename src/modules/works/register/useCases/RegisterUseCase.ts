import { inject, injectable } from 'tsyringe';
import { IWork } from '../interfaces/IRegisterWork';
import { IRegisterRepository } from '../repositories/IRegisterRepository';

@injectable()
class RegisterUseCase {
	constructor(
		@inject('RegisterRepository')
		private registerRepository: IRegisterRepository
	) {}

	private convertToBoolean(value: string | boolean): boolean {
		if (typeof value === 'string') {
			return value.toLowerCase() === 'true';
		}
		return value;
	}
	async execute(userId: number, work: IWork): Promise<void> {
		// Verifica se todos os campos obrigatórios estão presentes e preenchidos
		work.active = this.convertToBoolean(work.active);

		const requiredFields: (keyof IWork)[] = [
			'address',
			'phoneContact',
			'nameResponsible',
			'company',
			'workDescription',
		];

		const missingFields: string[] = [];
		for (const field of requiredFields) {
			if (!work[field]) {
				missingFields.push(field);
			}
		}

		if (missingFields.length > 0) {
			throw new Error(
				`Os campos obrigatórios (${missingFields}) devem ser preenchidos.`
			);
		}

		if (work.address.length < 10) {
			throw new Error('Endereço da obra deve conter pelo menos 10 caracteres');
		}

		try {
			await this.registerRepository.register(userId, work);
		} catch (error) {
			throw new Error('Erro ao registrar obra');
		}
	}
}

export { RegisterUseCase };
