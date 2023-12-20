export interface BaseInterface {
	id: number;
	createdAt: Date;
	updatedAt: Date;
}

export interface IEffective extends BaseInterface {
	workId: number;
	type: string;
	descriptionEffective: string;
	status: string;
}
