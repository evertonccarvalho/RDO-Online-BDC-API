import { IUserLogin } from '../interfaces/user-login';

interface IUserAuthRepository {
	login(email: string, password: string): Promise<IUserLogin | null>;
}

export { IUserAuthRepository };