import { inject, injectable } from 'tsyringe';
import { IObra } from '../../infra/entities/Obra';
import { IObraRepository } from '../../infra/repositories/IObraRepository';

@injectable()
class RegisterObraUseCase {
	constructor(
		@inject('ObraRepository')
		private obraRepository: IObraRepository
	) {}

	async execute(work: IObra): Promise<void> {
		try {
			await this.obraRepository.register(work);
		} catch (error) {
			console.error('Erro ao registrar obra:', error);
			throw new Error('Erro ao registrar obra');
		}
	}
}

export { RegisterObraUseCase };
