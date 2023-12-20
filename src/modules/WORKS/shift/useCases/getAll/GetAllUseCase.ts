import { IShift } from '../../interface/IShift';
import { IShiftRepository } from '../../repositories/IShiftRepository';

class GetAllUseCase {
	constructor(private GetAllRepository: IShiftRepository) {}

	async execute(workId: number): Promise<IShift[]> {
		return this.GetAllRepository.read(workId);
	}
}

export { GetAllUseCase };
