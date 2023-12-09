import { IRegisterUser, IUser } from '../interfaces/IUser';

interface IUserRepository {
	register(user: IRegisterUser): Promise<void>;
	getById(id: number): Promise<IUser | null>;
	getByEmail(email: string): Promise<IUser | null>;
	read(): Promise<IUser[]>;
	update(id: number, updatedData: IUser): Promise<void>;
	delete(id: number): Promise<void>;
}

export { IUserRepository };
