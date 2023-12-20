import { IEffective } from '../../interface/IEffective';
import { IEffectiveRepository } from '../../repositories/IEffectiveRepository';

class GetAllUseCase {
	constructor(private GetAllRepository: IEffectiveRepository) {}

	async execute(workId: number): Promise<IEffective[]> {
		return this.GetAllRepository.read(workId);
	}
}

export { GetAllUseCase };
