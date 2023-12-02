import { IUpdateWork } from '../interfaces/IUpdateWork';

interface IUpdateRepository {
	update(id: number, updatedWorkData: IUpdateWork): Promise<void>;
}

export { IUpdateRepository };
