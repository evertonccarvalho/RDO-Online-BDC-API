import { IUserRepository } from '../../repositories/IUserRepository';

class DeleteUserUseCase {
	constructor(private userRepository: IUserRepository) {}

	async execute(id: number): Promise<void> {
		const user = await this.userRepository.getById(id);

		if (!user) {
			throw new Error('Usuário não encontrado');
		}

		await this.userRepository.delete(id);
	}
}

export { DeleteUserUseCase };
