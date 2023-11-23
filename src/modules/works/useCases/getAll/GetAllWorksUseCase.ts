import { inject, injectable } from 'tsyringe';
import { IWork } from '../../interfaces/Work';
import { IWorkRepository } from '../../repositories/IWorkRepository';

@injectable()
class GetAllWorksUseCase {
	constructor(
		@inject('WorkRepository')
		private productRepository: IWorkRepository
	) {}

	async execute(): Promise<IWork[]> {
		return this.productRepository.read();
	}
}

export { GetAllWorksUseCase };
