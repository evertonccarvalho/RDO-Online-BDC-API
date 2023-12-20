import { IWork } from '../interface/IWork';

interface IWorkRepository {
	register(userId: number, work: IWork): Promise<IWork>;
	read(userId: number): Promise<IWork[]>;
	update(id: number, userId: number, updatedWorkData: IWork): Promise<void>;

	getById(id: number, userId: number): Promise<IWork | null>;
	delete(id: number, userId: number): Promise<void>;
}
export { IWorkRepository };
