import { ILocation } from '../interface/ILocation';

interface ILocationRepository {
	create(
		interference: ILocation,
		teamId: number,
		workId: number
	): Promise<ILocation>;
	read(workId: number): Promise<ILocation[]>;

	getById(id: number, workId: number): Promise<ILocation | null>;

	update(id: number, workId: number, updatedData: ILocation): Promise<void>;

	delete(id: number, workId: number): Promise<void>;
}
export { ILocationRepository };
