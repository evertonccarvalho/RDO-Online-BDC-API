import { ISubServiceCategory } from '../../../interface/IService';
import { ISubServiceCategoryRepository } from '../../repositories/ISubServiceCategoryRepository';

class GetByIdUseCase {
	constructor(private GetByIdUseCase: ISubServiceCategoryRepository) {}

	async execute(id: number): Promise<ISubServiceCategory | null> {
		return this.GetByIdUseCase.getById(id);
	}
}

export { GetByIdUseCase };
