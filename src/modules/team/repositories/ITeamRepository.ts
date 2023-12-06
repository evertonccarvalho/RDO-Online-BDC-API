import { ITeam } from '../interface/ITeam';

interface ITeamRepository {
	create(team: ITeam, workId: number): Promise<ITeam>;
	read(workId: number): Promise<ITeam[]>;

	getById(id: number, workId: number): Promise<ITeam | null>;

	update(id: number, workId: number, updatedData: ITeam): Promise<void>;
	delete(id: number, workId: number): Promise<void>;
}
export { ITeamRepository };
