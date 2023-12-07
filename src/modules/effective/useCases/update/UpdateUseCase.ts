import { IEffective } from '../../interface/IEffective';
import { IEffectiveRepository } from '../../repositories/IEffectiveRepository';

class UpdateUseCase {
	constructor(private UpdateRepository: IEffectiveRepository) {}

	async execute(
		id: number,
		workId: number,
		updatedData: IEffective
	): Promise<void> {
		return this.UpdateRepository.update(id, workId, updatedData);
	}
}

export { UpdateUseCase };
