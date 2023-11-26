import { inject, injectable } from 'tsyringe';
import { IWork } from '../../interfaces/Work';
import { IWorkRepository } from '../../repositories/IWorkRepository';

@injectable()
class UpdateWorkUseCase {
	constructor(
		@inject('WorkRepository')
		private workRepository: IWorkRepository
	) {}

	async execute(id: number, updatedWorkData: IWork): Promise<void> {
		const obra = await this.workRepository.getById(id);

		if (!obra) {
			throw new Error('Obra não encontrado');
		}

		await this.workRepository.update(id, updatedWorkData);
	}
}

export { UpdateWorkUseCase };
