import { IWork } from '../../interface/IWork';
import { IGetAllRepository } from '../repositories/IGetAllRepository';

class GetAllUseCase {
	constructor(private GetAllRepository: IGetAllRepository) {}

	async execute(userId: number): Promise<IWork[]> {
		return this.GetAllRepository.read(userId);
	}
}

export { GetAllUseCase };
