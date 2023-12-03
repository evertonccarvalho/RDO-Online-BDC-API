import { IWork } from '../../interface/IWork';

interface IUpdateRepository {
	update(id: number, userId: number, updatedWorkData: IWork): Promise<void>;
}

export { IUpdateRepository };
