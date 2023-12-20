import { IServiceCategory } from '../../../interface/IService';
import { IServiceCategoryRepository } from '../../repositories/IServiceCategoryRepository';

class UpdateUseCase {
	constructor(private UpdateRepository: IServiceCategoryRepository) {}

	async execute(id: number, updateData: IServiceCategory): Promise<void> {
		return this.UpdateRepository.update(id, updateData);
	}
}

export { UpdateUseCase };
