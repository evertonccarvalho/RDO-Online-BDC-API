import { IWork } from '../../interface/IWork';

interface IRegisterRepository {
	register(userId: number, work: IWork): Promise<IWork>;
}
export { IRegisterRepository };
