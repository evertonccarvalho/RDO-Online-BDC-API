import { IShift } from '../../interface/IShift';
import { IShiftRepository } from '../../repositories/IShiftRepository';

class GetByIdUseCase {
	constructor(private GetByIdUseCase: IShiftRepository) {}

	async execute(id: number, workId: number): Promise<IShift | null> {
		return this.GetByIdUseCase.getById(id, workId);
	}
}

export { GetByIdUseCase };
