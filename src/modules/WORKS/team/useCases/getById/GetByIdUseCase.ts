import { ITeam } from '../../interface/ITeam';
import { ITeamRepository } from '../../repositories/ITeamRepository';

class GetByIdUseCase {
	constructor(private GetByIdUseCase: ITeamRepository) {}

	async execute(id: number, workId: number): Promise<ITeam | null> {
		return this.GetByIdUseCase.getById(id, workId);
	}
}

export { GetByIdUseCase };
