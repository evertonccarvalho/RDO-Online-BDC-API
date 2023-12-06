import { ISubServiceCategory } from '../../../interface/IService';
import { ISubServiceCategoryRepository } from '../../repositories/ISubServiceCategoryRepository';

class GetAllUseCase {
	constructor(private GetAllRepository: ISubServiceCategoryRepository) {}

	async execute(): Promise<ISubServiceCategory[]> {
		return this.GetAllRepository.read();
	}
}

export { GetAllUseCase };
