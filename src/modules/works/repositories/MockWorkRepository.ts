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

	async getById(id: number): Promise<IWork | null> {
		return this.works.find((work) => work.id === id) || null;
	}

	async getByIdWithDetails(id: number): Promise<IWork | null> {
		return this.works.find((work) => work.id === id) || null;
	}

	async update(id: number, updateWorkData: IWork): Promise<void> {
		const index = this.works.findIndex((work) => work.id === id);
		if (index !== -1) {
			this.works[index] = updateWorkData;
		}
	}

	async delete(id: number): Promise<void> {
		this.works = this.works.filter((work) => work.id !== id);
	}
}

export { MockWorkRepository };
