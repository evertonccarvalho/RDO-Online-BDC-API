export interface IWork extends IWorkBase {
	workDescription: string;
	company: string;
	nameResponsible: string;
	phoneContact: string;
	address: string;
	logoUrl: string | null;
	active: boolean;
}

export interface IWorkBase {
	id: number;
	createdAt: Date;
	updatedAt: Date;
}
