import { inject, injectable } from 'tsyringe';
import { IWork } from '../../interfaces/Work';
import { IWorkRepository } from '../../repositories/IWorkRepository';

@injectable()
class UpdateWorkUseCase {
	constructor(
		@inject('WorkRepository')
		private obraRepository: IWorkRepository
	) {}

	async execute(workId: number, updatedWorkData: IWork): Promise<void> {
		const obra = await this.obraRepository.getById(workId);

		if (!obra) {
			throw new Error('Work não encontrado');
		}

		await this.obraRepository.update(workId, updatedWorkData);
	}
}

export { UpdateWorkUseCase };
