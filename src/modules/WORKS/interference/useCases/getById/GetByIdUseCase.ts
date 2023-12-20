import { IInterference } from '../../interface/IInterference';
import { IInterferenceRepository } from '../../repositories/IInterferenceRepository';

class GetByIdUseCase {
	constructor(private GetByIdUseCase: IInterferenceRepository) {}

	async execute(id: number, workId: number): Promise<IInterference | null> {
		return this.GetByIdUseCase.getById(id, workId);
	}
}

export { GetByIdUseCase };
