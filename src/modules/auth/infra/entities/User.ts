import { IWork } from '../../../obras/infra/entities/Work';

// Interface representando os dados do usuário para login
export interface IUserLogin extends UserPayload {
	email: string;
	password: string;
}

// Interface para representar o payload do usuário após o login
export interface UserPayload {
	id: number;
	userName: string;
	email: string;
	role: string;
	active: boolean;
	workId: number | null;
	work?: IWork[] | null;
}
