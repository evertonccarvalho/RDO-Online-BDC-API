import { IUser } from '../interfaces/User';

interface IUserRepository {
	getByEmail(email: string): Promise<IUser | null>;
	update(id: number, updatedUserData: IUser): Promise<void>;
}

export { IUserRepository };
