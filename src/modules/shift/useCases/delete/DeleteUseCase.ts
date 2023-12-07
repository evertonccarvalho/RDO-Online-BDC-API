import { IShiftRepository } from '../../repositories/IShiftRepository';

class DeleteUseCase {
	constructor(private DeleteRepository: IShiftRepository) {}

	async execute(id: number, teamId: number, workId: number): Promise<void> {
		return this.DeleteRepository.delete(id, teamId, workId);
	}
}

export { DeleteUseCase };
