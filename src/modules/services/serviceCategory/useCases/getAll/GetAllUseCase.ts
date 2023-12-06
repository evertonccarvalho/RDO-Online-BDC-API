import { IServiceCategory } from '../../../interface/IService';
import { IServiceCategoryRepository } from '../../repositories/IServiceCategoryRepository';

class GetAllUseCase {
	constructor(private GetAllRepository: IServiceCategoryRepository) {}

	async execute(): Promise<IServiceCategory[]> {
		return this.GetAllRepository.read();
	}
}

export { GetAllUseCase };
