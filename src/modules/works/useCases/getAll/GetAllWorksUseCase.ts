import { inject, injectable } from 'tsyringe';
import { IWork } from '../../interfaces/Work';
import { IWorkRepository } from '../../repositories/IWorkRepository';

@injectable()
class GetAllWorksUseCase {
	constructor(
		@inject('WorkRepository')
		private workRepository: IWorkRepository
	) {}

	async execute(): Promise<IWork[]> {
		return this.workRepository.read();
	}
}

export { GetAllWorksUseCase };
