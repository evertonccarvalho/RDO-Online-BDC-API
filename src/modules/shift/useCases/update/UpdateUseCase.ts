import { IShift } from '../../interface/IShift';
import { IShiftRepository } from '../../repositories/IShiftRepository';

class UpdateUseCase {
	constructor(private UpdateRepository: IShiftRepository) {}

	async execute(
		id: number,
		workId: number,
		updatedData: IShift
	): Promise<void> {
		return this.UpdateRepository.update(id, workId, updatedData);
	}
}

export { UpdateUseCase };
