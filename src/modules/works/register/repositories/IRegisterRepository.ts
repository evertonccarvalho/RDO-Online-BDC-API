import { IWork } from '../interfaces/IRegisterWork';

interface IRegisterRepository {
	register(userId: number, work: IWork): Promise<IWork>;
}
export { IRegisterRepository };
