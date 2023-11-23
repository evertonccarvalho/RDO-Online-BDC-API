import { inject, injectable } from 'tsyringe';
import { IWork } from '../../infra/entities/Work';
import { IWorkRepository } from '../../infra/repositories/IWorkRepository';

@injectable()
class GetObraByIdUseCase {
	constructor(
		@inject('ObraRepository')
		private obraRepository: IWorkRepository
	) {}

	async execute(obraId: number): Promise<IWork | null> {
		return this.obraRepository.getByIdWithDetails(obraId);
	}
}

export { GetObraByIdUseCase };
