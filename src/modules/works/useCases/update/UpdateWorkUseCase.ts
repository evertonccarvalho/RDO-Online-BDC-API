import { inject, injectable } from 'tsyringe';
import { IWork } from '../../interfaces/Work';
import { IWorkRepository } from '../../repositories/IWorkRepository';

@injectable()
class UpdateWorkUseCase {
	constructor(
		@inject('WorkRepository')
		private obraRepository: IWorkRepository
	) {}

	async execute(obraId: number, updatedWorkData: IWork): Promise<void> {
		const obra = await this.obraRepository.getById(obraId);

		if (!obra) {
			throw new Error('Work não encontrado');
		}

		await this.obraRepository.update(obraId, updatedWorkData);
	}
}

export { UpdateWorkUseCase };
