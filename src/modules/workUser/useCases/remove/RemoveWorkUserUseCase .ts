// Remover associação entre Usuário e Obra
import { IWorkUserRepository } from '../../repositories/IWorkUserRepository';

class RemoveWorkUserUseCase {
	constructor(private workUserRepository: IWorkUserRepository) {}

	async execute(userId: number, workId: number): Promise<void> {
		try {
			await this.workUserRepository.delete(userId, workId);
		} catch (error) {
			if (error instanceof Error) {
				throw new Error(`Erro ao remover a associação: ${error.message}`);
			}
		}
	}
}

export { RemoveWorkUserUseCase };
