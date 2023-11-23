import { IWork } from '../entities/Work';

interface IWorkRepository {
	register(obra: IWork): Promise<void>;
	getById(obraId: number): Promise<IWork | null>;
	getByIdWithDetails(obraId: number): Promise<IWork | null>;
	read(): Promise<IWork[]>;
	update(obraId: number, updatedObraData: IWork): Promise<void>;
	delete(pobraId: number): Promise<void>;
}

export { IWorkRepository };
