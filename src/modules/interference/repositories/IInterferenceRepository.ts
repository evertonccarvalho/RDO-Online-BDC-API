import { IInterference } from '../interface/IInterference';

interface IInterferenceRepository {
	create(
		interference: IInterference,
		teamId: number,
		workId: number
	): Promise<IInterference>;
	read(workId: number): Promise<IInterference[]>;

	getById(id: number, workId: number): Promise<IInterference | null>;

	update(id: number, workId: number, updatedData: IInterference): Promise<void>;

	delete(id: number, workId: number): Promise<void>;
}
export { IInterferenceRepository };
