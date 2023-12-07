import { ILocation } from '../../interface/ILocation';
import { ILocationRepository } from '../../repositories/ILocationRepository';

class UpdateUseCase {
	constructor(private UpdateRepository: ILocationRepository) {}

	async execute(
		id: number,
		workId: number,
		updatedData: ILocation
	): Promise<void> {
		return this.UpdateRepository.update(id, workId, updatedData);
	}
}

export { UpdateUseCase };
