import { IObra } from '../../../obras/infra/entities/Obra';

export interface IUserLogin {
	id?: number;
	userName: string;
	email: string;
	password: string;
	active: boolean;
	role: string;
	avatarUrl: string | null;
	workId?: number | null;
	work?: IObra[] | null;
	createdAt: Date;
	updatedAt: Date;
}
