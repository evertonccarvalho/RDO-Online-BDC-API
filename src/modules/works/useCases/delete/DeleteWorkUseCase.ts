import { inject, injectable } from 'tsyringe';
import { IWorkRepository } from '../../repositories/IWorkRepository';

@injectable()
class DeleteWorkUseCase {
	constructor(
		@inject('WorkRepository')
		private workRepository: IWorkRepository
	) {}

	async execute(id: number): Promise<void> {
		const work = await this.workRepository.getById(id);

		if (!work) {
			throw new Error('Obra não encontrado');
		}

		await this.workRepository.delete(id);
	}
}

export { DeleteWorkUseCase };
