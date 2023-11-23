import { inject, injectable } from 'tsyringe';
import { IUser } from '../../interfaces/User';
import { IUserRepository } from '../../repositories/IUserRepository';

@injectable()
class GetAllUsersUseCase {
	constructor(
		@inject('UserRepository')
		private userRepository: IUserRepository
	) {}

	async execute(): Promise<IUser[]> {
		return this.userRepository.read();
	}
}

export { GetAllUsersUseCase };
