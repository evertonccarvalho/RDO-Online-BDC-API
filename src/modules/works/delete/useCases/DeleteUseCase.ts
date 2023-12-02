import { inject, injectable } from 'tsyringe';
import { IDeleteRepository } from '../repositories/IDeleteRepository';

@injectable()
class DeleteUseCase {
	constructor(
		@inject('DeleteRepository')
		private deleteRepository: IDeleteRepository
	) {}

	async execute(workId: number, userId: number): Promise<void> {
		return this.deleteRepository.delete(workId, userId);
	}
}

export { DeleteUseCase };
