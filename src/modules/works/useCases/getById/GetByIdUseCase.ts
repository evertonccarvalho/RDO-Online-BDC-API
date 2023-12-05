import { IWork } from '../../interface/IWork';
import { IWorkRepository } from '../../repositories/IWorkRepository';

class GetByIdUseCase {
	constructor(private GetByIdUseCase: IWorkRepository) {}

	async execute(id: number, userId: number): Promise<IWork | null> {
		return this.GetByIdUseCase.getById(id, userId);
	}
}

export { GetByIdUseCase };
