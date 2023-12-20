import { ILocation } from '../../interface/ILocation';
import { ILocationRepository } from '../../repositories/ILocationRepository';

class GetAllUseCase {
	constructor(private GetAllRepository: ILocationRepository) {}

	async execute(workId: number): Promise<ILocation[]> {
		return this.GetAllRepository.read(workId);
	}
}

export { GetAllUseCase };
