import { IWork } from '../interfaces/Work';

interface IWorkRepository {
	// register(work: IWork): Promise<void>;
	register(userId: number, work: IWork): Promise<void>;
	getById(id: number): Promise<IWork | null>;
	getByIdWithDetails(id: number): Promise<IWork | null>;
	read(userId: number): Promise<IWork[]>;
	update(id: number, updatedWorkData: IWork): Promise<void>;
	delete(id: number): Promise<void>;
}

export { IWorkRepository };
