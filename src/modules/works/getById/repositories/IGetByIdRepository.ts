import { IWork } from '../../interface/IWork';

interface IGetByIdRepository {
	getById(id: number, userId: number): Promise<IWork | null>;
}

export { IGetByIdRepository };
