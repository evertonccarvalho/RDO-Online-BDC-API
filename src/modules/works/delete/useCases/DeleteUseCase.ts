import { inject, injectable } from 'tsyringe';
import { GetByIdRepository } from '../../getById/repositories/GetByIdRepository';
import { IDeleteRepository } from '../repositories/IDeleteRepository';

@injectable()
class DeleteUseCase {
	constructor(
		@inject('DeleteRepository')
		private deleteRepository: IDeleteRepository,
		@inject('GetByIdRepository')
		private getByIdRepository: GetByIdRepository // Injetando o GetByIdRepository
	) {}

	async execute(workId: number, userId: number): Promise<void> {
		const work = await this.getByIdRepository.getById(workId, userId);

		if (!work) {
			throw new Error('Obra não encontrada');
		}

		await this.deleteRepository.delete(workId, userId);
	}
}

export { DeleteUseCase };
