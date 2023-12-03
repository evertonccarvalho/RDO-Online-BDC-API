import { IUserLogin } from '../../users/interfaces/IUser';

interface IUserAuthRepository {
	login(email: string, password: string): Promise<IUserLogin | null>;
	getById(id: number): Promise<IUserLogin | null>;
}

export { IUserAuthRepository };
