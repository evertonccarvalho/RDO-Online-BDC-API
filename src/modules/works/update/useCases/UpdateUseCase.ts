import { inject, injectable } from 'tsyringe';
import { IUpdateWork } from '../interfaces/IUpdateWork';
import { IUpdateRepository } from '../repositories/IUpdateRepository';

@injectable()
class UpdateUseCase {
	constructor(
		@inject('UpdateRepository')
		private updateRepository: IUpdateRepository
	) {}

	async execute(
		workId: number,
		userId: number,
		updatedWorkData: IUpdateWork
	): Promise<void> {
		return this.updateRepository.update(workId, userId, updatedWorkData);
	}
}

export { UpdateUseCase };
