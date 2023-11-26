import { inject, injectable } from 'tsyringe';
import { IUserRepository } from '../../repositories/IUserRepository';

@injectable()
class DeleteUserUseCase {
	constructor(
		@inject('UserRepository')
		private userRepository: IUserRepository
	) {}

	async execute(id: number): Promise<void> {
		const user = await this.userRepository.getById(id);

		if (!user) {
			throw new Error('Usuário não encontrado');
		}

		await this.userRepository.delete(id);
	}
}

export { DeleteUserUseCase };
