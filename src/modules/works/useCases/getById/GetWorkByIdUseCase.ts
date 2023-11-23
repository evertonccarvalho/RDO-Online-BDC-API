import { inject, injectable } from 'tsyringe';
import { IWork } from '../../interfaces/Work';
import { IWorkRepository } from '../../repositories/IWorkRepository';

@injectable()
class GetWorkByIdUseCase {
	constructor(
		@inject('WorkRepository')
		private workRepository: IWorkRepository
	) {}

	async execute(workId: number): Promise<IWork | null> {
		return this.workRepository.getByIdWithDetails(workId);
	}
}

export { GetWorkByIdUseCase };
