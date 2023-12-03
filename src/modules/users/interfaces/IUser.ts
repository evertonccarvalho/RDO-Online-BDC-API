import { IWork } from '../../works/interface/IWork';

export interface IUser extends IUserBase {
	email: string;
	avatarUrl: string | null;
	active: boolean;
	role: string;
	work: IWork[];
}

export interface IUserBase {
	id: number;
	userName: string;
	createdAt: Date;
	updatedAt: Date;
}

export interface IRegisterUser {
	userName: string;
	email: string;
	password: string;
	confirmPassword: string;
}

export interface UserPayload {
	id: number;
	email: string;
	userName: string;
	role: string;
	active: boolean;
	work?: IWork[] | null;
}

export interface IUserLogin extends UserPayload {
	email: string;
	password: string;
}

export interface IUserProfileUpdate {
	id: number;
	userName: string;
	avatarUrl: string | null;
}
