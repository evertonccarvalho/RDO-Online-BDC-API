import { inject, injectable } from 'tsyringe';
import { IDeleteRepository } from '../repositories/IDeleteRepository';

@injectable()
class DeleteUseCase {
	constructor(
		@inject('DeleteRepository')
		private deleteRepository: IDeleteRepository
	) {}

	async execute(id: number): Promise<void> {
		const work = await this.deleteRepository.getById(id);

		if (!work) {
			throw new Error('Obra não encontrado');
		}

		await this.deleteRepository.delete(id);
	}
}

export { DeleteUseCase };
