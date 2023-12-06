import { ISubServiceCategory } from '../../../interface/IService';
import { ISubServiceCategoryRepository } from '../../repositories/ISubServiceCategoryRepository';

class UpdateUseCase {
	constructor(private UpdateRepository: ISubServiceCategoryRepository) {}

	async execute(
		workId: number,
		updateData: ISubServiceCategory
	): Promise<void> {
		return this.UpdateRepository.update(workId, updateData);
	}
}

export { UpdateUseCase };
