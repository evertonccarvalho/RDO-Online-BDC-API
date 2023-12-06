import { ITeam } from '../../interface/ITeam';
import { ITeamRepository } from '../../repositories/ITeamRepository';

class GetAllUseCase {
	constructor(private GetAllRepository: ITeamRepository) {}

	async execute(workId: number): Promise<ITeam[]> {
		return this.GetAllRepository.read(workId);
	}
}

export { GetAllUseCase };
