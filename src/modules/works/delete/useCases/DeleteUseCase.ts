import { inject, injectable } from 'tsyringe';
import { IDeleteRepository } from '../repositories/IDeleteRepository';

class DeleteUseCase {
	constructor(private DeleteRepository: IDeleteRepository) {}

	async execute(workId: number, userId: number): Promise<void> {
		return this.DeleteRepository.delete(workId, userId);
	}
}

export { DeleteUseCase };
