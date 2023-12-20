import { IInterference } from '../../interface/IInterference';
import { IInterferenceRepository } from '../../repositories/IInterferenceRepository';

class UpdateUseCase {
	constructor(private UpdateRepository: IInterferenceRepository) {}

	async execute(
		id: number,
		workId: number,
		updatedData: IInterference
	): Promise<void> {
		return this.UpdateRepository.update(id, workId, updatedData);
	}
}

export { UpdateUseCase };
