export interface IUser extends IUserBase {
	userName: string;
	email: string;
	avatarUrl: string | null;
	active: boolean;
	role: string;
}

export interface IUserBase {
	id: number;
	createdAt: Date;
	updatedAt: Date;
}

export interface IRegisterUser {
	userName: string;
	email: string;
	password: string;
	confirmPassword: string;
}

export interface ShowUser extends IUserBase {
	email: string;
	userName: string;
	role: string;
	avatarUrl: string | null;
	active: boolean;
	workUsers?: IWorkUser;
}

export interface IUserLogin extends ShowUser {
	email: string;
	password: string;
}

export interface IUserProfileUpdate {
	id: number;
	userName: string;
	avatarUrl: string | null;
}

export interface IWorkUser {
	id: number;
	userId: number;
	workId: number;
}
