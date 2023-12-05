import { ISubServiceCategory } from '../../interface/IService';

interface ISubServiceCategoryRepository {
	create(
		subServiceCategory: ISubServiceCategory,
		serviceCategoryId: number
	): Promise<ISubServiceCategory>;
	// read(workId: number): Promise<IService[]>;
	// // update(id: number, userId: number, updatedWorkData: IWork): Promise<void>;

	// getById(id: number, workId: number): Promise<IService | null>;
	// delete(id: number, workId: number): Promise<void>;
}
export { ISubServiceCategoryRepository };
