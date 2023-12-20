import { IWork } from '../../interface/IWork';
import { IWorkRepository } from '../../repositories/IWorkRepository';

class UpdateUseCase {
	constructor(private UpdateRepository: IWorkRepository) {}

	async execute(
		workId: number,
		userId: number,
		updatedWorkData: IWork
	): Promise<void> {
		return this.UpdateRepository.update(workId, userId, updatedWorkData);
	}
}

export { UpdateUseCase };
