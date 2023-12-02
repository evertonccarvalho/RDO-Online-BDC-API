export interface IWork {
	id: number;
	workDescription: string;
	company: string;
	nameResponsible: string;
	phoneContact: string;
	address: string;
	logoUrl: string | null;
	active: boolean;
	createdAt: Date;
	updatedAt: Date;
}
