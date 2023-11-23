import { IWork } from '../interfaces/Work';

interface IWorkRepository {
	register(work: IWork): Promise<void>;
	getById(workId: number): Promise<IWork | null>;
	getByIdWithDetails(workId: number): Promise<IWork | null>;
	read(): Promise<IWork[]>;
	update(workId: number, updatedWorkData: IWork): Promise<void>;
	delete(workId: number): Promise<void>;
}

export { IWorkRepository };
