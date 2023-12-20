import { IServiceRepository } from '../../repositories/IServiceRepository';

class DeleteUseCase {
	constructor(private DeleteRepository: IServiceRepository) {}

	async execute(id: number, workId: number, userId: number): Promise<void> {
		return this.DeleteRepository.delete(id, workId, userId);
	}
}

export { DeleteUseCase };
