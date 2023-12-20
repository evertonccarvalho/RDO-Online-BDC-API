// FindWorksByWorkIdUseCase.ts

import { WorkUser } from '@prisma/client';
import { IWorkUserRepository } from '../../repositories/IWorkUserRepository';

class FindWorksByWorkIdUseCase {
	constructor(private workUserRepository: IWorkUserRepository) {}

	async execute(workId: number): Promise<WorkUser[]> {
		const works = await this.workUserRepository.findByWorkId(workId);
		return works;
	}
}

export { FindWorksByWorkIdUseCase };
