import { IUpdateWork } from '../interfaces/IUpdateWork';

interface IUpdateRepository {
	update(
		id: number,
		userId: number,
		updatedWorkData: IUpdateWork
	): Promise<void>;
}

export { IUpdateRepository };
