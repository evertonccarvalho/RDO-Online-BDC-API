import { ILocationRepository } from '../../repositories/ILocationRepository';

class DeleteUseCase {
	constructor(private DeleteRepository: ILocationRepository) {}

	async execute(id: number, workId: number): Promise<void> {
		return this.DeleteRepository.delete(id, workId);
	}
}

export { DeleteUseCase };
