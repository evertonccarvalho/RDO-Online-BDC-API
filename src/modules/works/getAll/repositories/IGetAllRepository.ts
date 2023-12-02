import { IGetAll } from '../interfaces/IGetAll';

interface IGetAllRepository {
	read(userId: number): Promise<IGetAll[]>;
}

export { IGetAllRepository };
