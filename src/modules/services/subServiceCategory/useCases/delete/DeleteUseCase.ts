import { ISubServiceCategoryRepository } from '../../repositories/ISubServiceCategoryRepository';

class DeleteUseCase {
	constructor(private DeleteRepository: ISubServiceCategoryRepository) {}

	async execute(id: number): Promise<void> {
		return this.DeleteRepository.delete(id);
	}
}

export { DeleteUseCase };
