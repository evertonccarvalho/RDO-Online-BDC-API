export interface BaseInterface {
	id: number;
	createdAt: Date;
	updatedAt: Date;
}

export interface IShift extends BaseInterface {
	teamId: number;
	workId: number;
	description: string;
	feasibility: string;
	weatherCondition: string;
	status: string;
}
