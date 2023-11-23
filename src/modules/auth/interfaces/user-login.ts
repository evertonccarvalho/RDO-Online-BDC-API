import { UserPayload } from './payload';

// Interface representando os dados do usuário para login
export interface IUserLogin extends UserPayload {
	email: string;
	password: string;
}
