import { IWorkUserRepository } from '../../repositories/IWorkUserRepository';

class CreateWorkUserUseCase {
	constructor(private workUserRepository: IWorkUserRepository) {}

	async execute(userId: number, workId: number): Promise<void> {
		try {
			await this.workUserRepository.create(userId, workId);
		} catch (error) {
			// Trate o erro de acordo com suas necessidades
			if (error instanceof Error) {
				throw new Error(`Erro ao criar WorkUser: ${error.message}`);
			}
		}
	}
}

export { CreateWorkUserUseCase };
