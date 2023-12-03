import { IUser } from '../../interfaces/IUser';
import { IUserRepository } from '../../repositories/IUserRepository';

class GetAllUsersUseCase {
	constructor(private userRepository: IUserRepository) {}

	async execute(): Promise<IUser[]> {
		return this.userRepository.read();
	}
}

export { GetAllUsersUseCase };
