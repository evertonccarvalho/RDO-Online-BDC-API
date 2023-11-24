import { IWork } from '../interfaces/Work';
import { IWorkRepository } from './IWorkRepository';

class MockWorkRepository implements IWorkRepository {
	private works: IWork[] = [];

	async register(work: IWork): Promise<void> {
		this.works.push(work);
	}

	async read(): Promise<IWork[]> {
		return this.works;
	}

	async getById(workId: number): Promise<IWork | null> {
		return this.works.find((work) => work.id === workId) || null;
	}

	async getByIdWithDetails(workId: number): Promise<IWork | null> {
		return this.works.find((work) => work.id === workId) || null;
	}

	async update(workId: number, updateWorkData: IWork): Promise<void> {
		const index = this.works.findIndex((work) => work.id === workId);
		if (index !== -1) {
			this.works[index] = updateWorkData;
		}
	}

	async delete(workId: number): Promise<void> {
		this.works = this.works.filter((work) => work.id !== workId);
	}
}

export { MockWorkRepository };
