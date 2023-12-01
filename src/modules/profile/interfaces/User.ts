import { IWork } from '../../works/interfaces/Work';

export interface IUser {
	id: number;
	workId: number | null;
	work: IWork | null;
	userName: string;
	email: string;
	avatarUrl: string | null;
	active: boolean;
	role: string;
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