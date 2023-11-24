import { IUser } from '../../users/interfaces/User';

export interface IWork {
	id: number;
	workDescription: string;
	company: string;
	nameResponsible: string;
	phoneContact: string;
	address: string;
	logoUrl: string;
	active: boolean;
	users?: IUser[];
	createdAt: Date;
	updatedAt: Date;
}

export interface IWorkDTO extends IWork {
	address: string;
	phoneContact: string;
	nameResponsible: string;
	active: boolean;
	company: string;
	workDescription: string;
}
