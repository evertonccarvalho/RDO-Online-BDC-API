import { IWork } from '../../obras/interfaces/Work';

export interface UserPayload {
	id: number;
	userName: string;
	email: string;
	role: string;
	active: boolean;
	workId: number | null;
	work?: IWork[] | null;
}