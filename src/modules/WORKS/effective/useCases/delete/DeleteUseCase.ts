import { IEffectiveRepository } from '../../repositories/IEffectiveRepository';

class DeleteUseCase {
	constructor(private DeleteRepository: IEffectiveRepository) {}

	async execute(id: number, workId: number): Promise<void> {
		return this.DeleteRepository.delete(id, workId);
	}
}

export { DeleteUseCase };
