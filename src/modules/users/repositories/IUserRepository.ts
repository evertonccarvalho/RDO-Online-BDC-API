import { IRegisterUser, IUser } from '../interfaces/User';

interface IUserRepository {
	register(user: IRegisterUser): Promise<void>;

	getById(userId: number): Promise<IUser | null>;
	getByEmail(email: string): Promise<IUser | null>;
	read(): Promise<IUser[]>;
	update(userId: number, updatedUserData: IUser): Promise<void>;
	delete(puserId: number): Promise<void>;
}

export { IUserRepository };
