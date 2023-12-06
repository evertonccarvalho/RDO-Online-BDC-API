import { IServiceCategory } from '../../interface/IService';

interface IServiceCategoryRepository {
	create(serviceCategory: IServiceCategory): Promise<IServiceCategory>;
	read(): Promise<IServiceCategory[]>;
	update(id: number, updateData: IServiceCategory): Promise<void>;

	getById(id: number): Promise<IServiceCategory | null>;
	delete(id: number): Promise<void>;
}
export { IServiceCategoryRepository };
