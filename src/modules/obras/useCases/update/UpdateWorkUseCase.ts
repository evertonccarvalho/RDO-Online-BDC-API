import { inject, injectable } from 'tsyringe';
import { IWork } from '../../infra/entities/Work';
import { IWorkRepository } from '../../infra/repositories/IWorkRepository';

@injectable()
class UpdateObraUseCase {
	constructor(
		@inject('ObraRepository')
		private obraRepository: IWorkRepository
	) {}

	async execute(obraId: number, updatedObraData: IWork): Promise<void> {
		const obra = await this.obraRepository.getById(obraId);

		if (!obra) {
			throw new Error('Obra não encontrado');
		}

		await this.obraRepository.update(obraId, updatedObraData);
	}
}

export { UpdateObraUseCase };
