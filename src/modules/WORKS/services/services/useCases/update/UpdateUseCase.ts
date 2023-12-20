import { IService } from '../../../interface/IService';
import { IServiceRepository } from '../../repositories/IServiceRepository';

class UpdateUseCase {
	constructor(private UpdateRepository: IServiceRepository) {}

	async execute(
		id: number,
		workId: number,
		userId: number,
		updatedData: IService
	): Promise<void> {
		return this.UpdateRepository.update(id, workId, userId, updatedData);
	}
}

export { UpdateUseCase };
