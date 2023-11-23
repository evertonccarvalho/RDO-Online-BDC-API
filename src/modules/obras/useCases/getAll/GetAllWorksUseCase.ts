import { inject, injectable } from 'tsyringe';
import { IWork } from '../../infra/entities/Work';
import { IWorkRepository } from '../../infra/repositories/IWorkRepository';

@injectable()
class GetAllObrasUseCase {
	constructor(
		@inject('ObraRepository')
		private productRepository: IWorkRepository
	) {}

	async execute(): Promise<IWork[]> {
		return this.productRepository.read();
	}
}

export { GetAllObrasUseCase };
