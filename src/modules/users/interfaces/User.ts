import { IWorkDTO } from '../../works/interfaces/Work';

export interface IUser {
	id: number;
	userName: string;
	email: string;
	avatarUrl: string | null;
	active: boolean;
	role: string;
	work: IWorkDTO[];
	createdAt: Date;
	updatedAt: Date;
}

export interface IRegisterUser {
	userName: string;
	email: string;
	password: string;
	confirmPassword: string;
	role: string;
}
