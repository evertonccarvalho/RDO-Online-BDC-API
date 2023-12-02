import { inject, injectable } from 'tsyringe';
import { IUpdateWork } from '../interfaces/IUpdateWork';
import { IUpdateRepository } from '../repositories/IUpdateRepository';

@injectable()
class UpdateWorkUseCase {
	constructor(
		@inject('UpdateRepository')
		private updateRepository: IUpdateRepository
	) {}

	async execute(workId: number, updatedWorkData: IUpdateWork): Promise<void> {
		const obra = await this.updateRepository.getById(workId);

		if (!obra) {
			throw new Error('Obra não encontrado');
		}

		await this.updateRepository.update(workId, updatedWorkData);
	}
}

export { UpdateWorkUseCase };
