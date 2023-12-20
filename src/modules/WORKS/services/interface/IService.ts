export interface IService extends BaseInterface {
	workId: number;
	serviceDescription: string;
	unit: string;
	status: string;
	totalAmount: number;
	subcategoryId: number;
}

export interface IServiceCategory extends BaseInterface {
	name: string;
	status: string;
}

export interface ISubServiceCategory {
	id: number;
	name: string;
	status: string;
	serviceCategoryId: number;
}

export interface BaseInterface {
	id: number;
	createdAt: Date;
	updatedAt: Date;
}
