export interface BaseInterface {
	id: number;
	createdAt: Date;
	updatedAt: Date;
}

export interface IInterference extends BaseInterface {
	teamId: number;
	workId: number;
	interferenceResponsible: string;
	category: string;
	subCategory: string;
	status: string;
}
