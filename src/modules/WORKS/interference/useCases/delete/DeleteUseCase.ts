import { IInterferenceRepository } from '../../repositories/IInterferenceRepository';

class DeleteUseCase {
	constructor(private DeleteRepository: IInterferenceRepository) {}

	async execute(id: number, workId: number): Promise<void> {
		return this.DeleteRepository.delete(id, workId);
	}
}

export { DeleteUseCase };
