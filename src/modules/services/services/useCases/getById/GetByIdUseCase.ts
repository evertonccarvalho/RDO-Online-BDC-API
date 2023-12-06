import { IService } from '../../../interface/IService';
import { IServiceRepository } from '../../repositories/IServiceRepository';

class GetByIdUseCase {
	constructor(private GetByIdUseCase: IServiceRepository) {}

	async execute(id: number, workId: number): Promise<IService | null> {
		return this.GetByIdUseCase.getById(id, workId);
	}
}

export { GetByIdUseCase };
