import { inject, injectable } from 'tsyringe';
import { IUser } from '../../interfaces/User';
import { IUserRepository } from '../../repositories/IUserRepository';

@injectable()
class GetUserByIdUseCase {
	constructor(
		@inject('UserRepository')
		private userRepository: IUserRepository
	) {}

	async execute(userId: number): Promise<IUser | null> {
		return this.userRepository.getById(userId);
	}
}

export { GetUserByIdUseCase };
