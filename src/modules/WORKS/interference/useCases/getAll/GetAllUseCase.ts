import { IInterference } from '../../interface/IInterference';
import { IInterferenceRepository } from '../../repositories/IInterferenceRepository';

class GetAllUseCase {
	constructor(private GetAllRepository: IInterferenceRepository) {}

	async execute(workId: number): Promise<IInterference[]> {
		return this.GetAllRepository.read(workId);
	}
}

export { GetAllUseCase };
