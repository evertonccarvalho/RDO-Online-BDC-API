import { IServiceCategory } from '../../interface/IService';

interface IServiceCategoryRepository {
	create(serviceCategory: IServiceCategory): Promise<IServiceCategory>;
	// read(workId: number): Promise<IService[]>;
	// // update(id: number, userId: number, updatedWorkData: IWork): Promise<void>;

	// getById(id: number, workId: number): Promise<IService | null>;
	// delete(id: number, workId: number): Promise<void>;
}
export { IServiceCategoryRepository };
