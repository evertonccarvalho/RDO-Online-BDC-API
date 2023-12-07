import { ILocation } from '../../interface/ILocation';
import { ILocationRepository } from '../../repositories/ILocationRepository';

class GetByIdUseCase {
	constructor(private GetByIdUseCase: ILocationRepository) {}

	async execute(id: number, workId: number): Promise<ILocation | null> {
		return this.GetByIdUseCase.getById(id, workId);
	}
}

export { GetByIdUseCase };
