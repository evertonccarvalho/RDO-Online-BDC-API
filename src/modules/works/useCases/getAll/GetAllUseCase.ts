import { IWork } from '../../interface/IWork';
import { IWorkRepository } from '../../repositories/IWorkRepository';

class GetAllUseCase {
	constructor(private GetAllRepository: IWorkRepository) {}

	async execute(userId: number): Promise<IWork[]> {
		return this.GetAllRepository.read(userId);
	}
}

export { GetAllUseCase };
