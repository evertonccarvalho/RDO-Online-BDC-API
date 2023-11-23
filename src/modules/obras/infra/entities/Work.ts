import { IUser } from '../../../users/infra/entities/User';

export interface IWork {
	id: number;
	workDescription: string;
	company: string;
	nameResponsible: string;
	phoneContact: string;
	address: string;
	logoUrl: string;
	active: boolean;
	users?: IUser[]; // Se você quiser representar a relação com usuários
	createdAt: Date;
	updatedAt: Date;
}
