import { IService } from '../../../interface/IService';
import { ServiceRepository } from '../../repositories/ServiceRepository';

class GetAllUseCase {
	constructor(private GetAllRepository: ServiceRepository) {}

	async execute(workId: number, userId: number): Promise<IService[]> {
		return this.GetAllRepository.read(workId, userId);
	}
}

export { GetAllUseCase };
