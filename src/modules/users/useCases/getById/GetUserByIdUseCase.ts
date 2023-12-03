import { IUser } from '../../interfaces/IUser';
import { IUserRepository } from '../../repositories/IUserRepository';

class GetUserByIdUseCase {
	constructor(private userRepository: IUserRepository) {}

	async execute(id: number): Promise<IUser | null> {
		return this.userRepository.getById(id);
	}
}

export { GetUserByIdUseCase };
