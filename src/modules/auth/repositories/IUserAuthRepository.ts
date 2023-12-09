import { IUserLogin } from '../../users/interfaces/IUser';

interface IUserAuthRepository {
	login(email: string, password: string): Promise<IUserLogin | null>;
}

export { IUserAuthRepository };
