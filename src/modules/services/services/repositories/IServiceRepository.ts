import { IService } from '../../interface/IService';

interface IServiceRepository {
	create(
		service: IService,
		workId: number,
		subcategoryId: number
	): Promise<IService>;
	read(workId: number): Promise<IService[]>;

	getById(id: number, workId: number): Promise<IService | null>;

	update(id: number, workId: number, updatedData: IService): Promise<void>;
	delete(id: number, workId: number): Promise<void>;
}
export { IServiceRepository };
