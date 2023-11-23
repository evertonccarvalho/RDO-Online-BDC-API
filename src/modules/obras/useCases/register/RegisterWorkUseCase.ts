import { inject, injectable } from 'tsyringe';
import { IWork } from '../../infra/entities/Work';
import { IWorkRepository } from '../../infra/repositories/IWorkRepository';

@injectable()
class RegisterObraUseCase {
	constructor(
		@inject('ObraRepository')
		private obraRepository: IWorkRepository
	) {}

	async execute(work: IWork): Promise<void> {
		try {
			await this.obraRepository.register(work);
		} catch (error) {
			console.error('Erro ao registrar obra:', error);
			throw new Error('Erro ao registrar obra');
		}
	}
}

export { RegisterObraUseCase };
