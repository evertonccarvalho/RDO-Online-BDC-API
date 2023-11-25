import { inject, injectable } from 'tsyringe';
import { IWork } from '../../interfaces/Work';
import { IWorkRepository } from '../../repositories/IWorkRepository';

@injectable()
class UpdateWorkUseCase {
	constructor(
		@inject('WorkRepository')
		private workRepository: IWorkRepository
	) {}

	async execute(workId: number, updatedWorkData: IWork): Promise<void> {
		const obra = await this.workRepository.getById(workId);

		if (!obra) {
			throw new Error('Obra não encontrado');
		}

		await this.workRepository.update(workId, updatedWorkData);
	}
}

export { UpdateWorkUseCase };
