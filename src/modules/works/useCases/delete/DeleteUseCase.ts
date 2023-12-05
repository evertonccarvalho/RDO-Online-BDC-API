import { IWorkRepository } from '../../repositories/IWorkRepository';

class DeleteUseCase {
	constructor(private DeleteRepository: IWorkRepository) {}

	async execute(workId: number, userId: number): Promise<void> {
		return this.DeleteRepository.delete(workId, userId);
	}
}

export { DeleteUseCase };
