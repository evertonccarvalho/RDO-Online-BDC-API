import { ISubServiceCategory } from '../../interface/IService';

interface ISubServiceCategoryRepository {
	create(
		subServiceCategory: ISubServiceCategory,
		serviceCategoryId: number
	): Promise<ISubServiceCategory>;

	read(): Promise<ISubServiceCategory[]>;

	update(id: number, updateData: ISubServiceCategory): Promise<void>;

	getById(id: number): Promise<ISubServiceCategory | null>;

	delete(id: number): Promise<void>;
}
export { ISubServiceCategoryRepository };
