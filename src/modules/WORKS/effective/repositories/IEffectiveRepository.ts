import { IEffective } from '../interface/IEffective';

interface IEffectiveRepository {
	create(
		interference: IEffective,
		teamId: number,
		workId: number
	): Promise<IEffective>;
	read(workId: number): Promise<IEffective[]>;

	getById(id: number, workId: number): Promise<IEffective | null>;

	update(id: number, workId: number, updatedData: IEffective): Promise<void>;

	delete(id: number, workId: number): Promise<void>;
}
export { IEffectiveRepository };
