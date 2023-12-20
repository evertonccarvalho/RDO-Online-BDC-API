import { IServiceCategory } from '../../../interface/IService';
import { IServiceCategoryRepository } from '../../repositories/IServiceCategoryRepository';

class GetByIdUseCase {
	constructor(private GetByIdUseCase: IServiceCategoryRepository) {}

	async execute(id: number): Promise<IServiceCategory | null> {
		return this.GetByIdUseCase.getById(id);
	}
}

export { GetByIdUseCase };
