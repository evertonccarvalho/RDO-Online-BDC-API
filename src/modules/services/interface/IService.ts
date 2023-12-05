import { IWork } from '../../works/interface/IWork';

export interface IService extends BaseInterface {
	workId: number;
	work: IWork[];
	serviceDescription: string;
	unit: string;
	status: string;
	subcategoryId: number;
	subcategory: ISubServiceCategory;
}

export interface IServiceCategory extends BaseInterface {
	name: string;
	status: string;
	subcategories: ISubServiceCategory[];
}

export interface ISubServiceCategory extends BaseInterface {
	name: string;
	status: string;
	serviceCategoryId: number;
	serviceCategory: IServiceCategory;
	services: IService[];
}

export interface BaseInterface {
	id: number;
	createdAt: Date;
	updatedAt: Date;
}
