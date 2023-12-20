import { Location } from '@prisma/client';

export interface BaseInterface {
	id: number;
	createdAt: Date;
	updatedAt: Date;
}

export interface ILocation extends BaseInterface {
	workId: number;
	descriptionLocation: string;
	responsibleLocation: string;
	status: string;
}
