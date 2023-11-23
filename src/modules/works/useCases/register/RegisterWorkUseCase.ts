import { inject, injectable } from 'tsyringe';
import { IWork } from '../../interfaces/Work';
import { IWorkRepository } from '../../repositories/IWorkRepository';

@injectable()
class RegisterWorkUseCase {
	constructor(
		@inject('WorkRepository')
		private workRepository: IWorkRepository
	) {}

	async execute(work: IWork): Promise<void> {
		try {
			await this.workRepository.register(work);
		} catch (error) {
			console.error('Erro ao registrar obra:', error);
			throw new Error('Erro ao registrar obra');
		}
	}
}

export { RegisterWorkUseCase };
