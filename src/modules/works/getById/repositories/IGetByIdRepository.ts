import { IGetByIdWork } from '../interfaces/IGetWorkById';

interface IGetByIdRepository {
	getById(id: number, userId: number): Promise<IGetByIdWork | null>;
}

export { IGetByIdRepository };
