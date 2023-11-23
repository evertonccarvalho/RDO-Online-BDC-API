import { inject, injectable } from 'tsyringe';
import { IWorkRepository } from '../../repositories/IWorkRepository';

@injectable()
class DeleteWorkUseCase {
	constructor(
		@inject('WorkRepository')
		private workRepository: IWorkRepository
	) {}

	async execute(workId: number): Promise<void> {
		const work = await this.workRepository.getById(workId);

		if (!work) {
			throw new Error('Obra não encontrado');
		}

		await this.workRepository.delete(workId);
	}
}

export { DeleteWorkUseCase };
