import { IWork } from '../../interface/IWork';

interface IGetAllRepository {
	read(userId: number): Promise<IWork[]>;
}

export { IGetAllRepository };
