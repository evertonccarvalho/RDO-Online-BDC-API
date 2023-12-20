import { WorkUser } from '@prisma/client';
import { IWorkUserRepository } from '../../repositories/IWorkUserRepository';

class FindWorksByUserIdUseCase {
	constructor(private workUserRepository: IWorkUserRepository) {}

	async execute(userId: number): Promise<WorkUser[]> {
		const works = await this.workUserRepository.findByUserId(userId);
		return works;
	}
}

export { FindWorksByUserIdUseCase };
