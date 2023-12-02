import { IGetByIdWork } from '../interfaces/IGetWorkById';

interface IGetByIdRepository {
	getById(id: number): Promise<IGetByIdWork | null>;
}

export { IGetByIdRepository };
