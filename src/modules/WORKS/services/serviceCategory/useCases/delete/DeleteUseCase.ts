import { IServiceCategoryRepository } from '../../repositories/IServiceCategoryRepository';

class DeleteUseCase {
	constructor(private DeleteRepository: IServiceCategoryRepository) {}

	async execute(id: number): Promise<void> {
		return this.DeleteRepository.delete(id);
	}
}

export { DeleteUseCase };
