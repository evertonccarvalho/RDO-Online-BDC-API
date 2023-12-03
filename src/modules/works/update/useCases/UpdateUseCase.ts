import { IWork } from '../../interface/IWork';
import { IUpdateRepository } from '../repositories/IUpdateRepository';

class UpdateUseCase {
	constructor(private UpdateRepository: IUpdateRepository) {}

	async execute(
		workId: number,
		userId: number,
		updatedWorkData: IWork
	): Promise<void> {
		return this.UpdateRepository.update(workId, userId, updatedWorkData);
	}
}

export { UpdateUseCase };
