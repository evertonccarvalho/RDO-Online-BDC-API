import { ITeam } from '../../interface/ITeam';
import { ITeamRepository } from '../../repositories/ITeamRepository';

class UpdateUseCase {
	constructor(private UpdateRepository: ITeamRepository) {}

	async execute(id: number, workId: number, updatedData: ITeam): Promise<void> {
		return this.UpdateRepository.update(id, workId, updatedData);
	}
}

export { UpdateUseCase };
