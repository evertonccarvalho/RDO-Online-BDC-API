import { IObra } from '../../../obras/infra/entities/Obra';

export interface IUser {
	id: number;
	workId: number | null;
	work: IObra | null;
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
	active?: boolean;
	workId?: number | null;
	work?: IObra | null;
	role: string;
}
