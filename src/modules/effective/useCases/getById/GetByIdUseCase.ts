import { IEffective } from '../../interface/IEffective';
import { IEffectiveRepository } from '../../repositories/IEffectiveRepository';

class GetByIdUseCase {
	constructor(private GetByIdUseCase: IEffectiveRepository) {}

	async execute(id: number, workId: number): Promise<IEffective | null> {
		return this.GetByIdUseCase.getById(id, workId);
	}
}

export { GetByIdUseCase };
