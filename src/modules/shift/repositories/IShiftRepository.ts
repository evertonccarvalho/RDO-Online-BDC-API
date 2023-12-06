import { IShift } from '../interface/IShift';

interface IShiftRepository {
	create(shift: IShift, teamId: number, workId: number): Promise<IShift>;
	// read(workId: number): Promise<IService[]>;

	// getById(id: number, workId: number): Promise<IService | null>;

	// update(id: number, workId: number, updatedData: IService): Promise<void>;
	// delete(id: number, workId: number): Promise<void>;
}
export { IShiftRepository };
