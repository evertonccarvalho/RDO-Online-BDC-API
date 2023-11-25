import { inject, injectable } from 'tsyringe';
import { IUser } from '../../interfaces/User';
import { IUserRepository } from '../../repositories/IUserRepository';

@injectable()
class UpdateUserUseCase {
	constructor(
		@inject('UserRepository')
		private userRepository: IUserRepository
	) {}

	async execute(id: number, updatedUserData: IUser): Promise<void> {
		const user = await this.userRepository.getById(id);

		if (!user) {
			throw new Error('Usuario não encontrado');
		}

		await this.userRepository.update(id, updatedUserData);
	}
}

export { UpdateUserUseCase };
