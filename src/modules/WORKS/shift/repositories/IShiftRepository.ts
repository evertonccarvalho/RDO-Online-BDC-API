import { IShift } from '../interface/IShift';

interface IShiftRepository {
	create(shift: IShift, teamId: number, workId: number): Promise<IShift>;
	read(workId: number): Promise<IShift[]>;

	getById(id: number, workId: number): Promise<IShift | null>;

	update(id: number, workId: number, updatedData: IShift): Promise<void>;

	delete(id: number, teamId: number, workId: number): Promise<void>;
}
export { IShiftRepository };
