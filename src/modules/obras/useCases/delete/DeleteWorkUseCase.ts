import { inject, injectable } from 'tsyringe';
import { IWorkRepository } from '../../infra/repositories/IWorkRepository';

@injectable()
class DeleteObraUseCase {
	constructor(
		@inject('ObraRepository')
		private obraRepository: IWorkRepository
	) {}

	async execute(obraId: number): Promise<void> {
		const obra = await this.obraRepository.getById(obraId);

		if (!obra) {
			throw new Error('Obra não encontrado');
		}

		await this.obraRepository.delete(obraId);
	}
}

export { DeleteObraUseCase };
