import { IServiceRepository } from '../../repositories/IServiceRepository';

class DeleteUseCase {
	constructor(private DeleteRepository: IServiceRepository) {}

	async execute(id: number, workId: number): Promise<void> {
		return this.DeleteRepository.delete(id, workId);
	}
}

export { DeleteUseCase };
