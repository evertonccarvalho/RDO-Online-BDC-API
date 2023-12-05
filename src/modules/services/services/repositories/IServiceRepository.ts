import { IService } from '../../interface/IService';

interface IServiceRepository {
	create(
		service: IService,
		workId: number,
		subcategoryId: number
	): Promise<IService>;
	read(workId: number): Promise<IService[]>;
	// update(id: number, userId: number, updatedWorkData: IWork): Promise<void>;

	getById(id: number, workId: number): Promise<IService | null>;
	delete(id: number, workId: number): Promise<void>;
}
export { IServiceRepository };
