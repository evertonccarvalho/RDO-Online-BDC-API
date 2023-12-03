import { IUser } from '../../interfaces/IUser';
import { IUserRepository } from '../../repositories/IUserRepository';

class GetUserByEmailUseCase {
	constructor(private userRepository: IUserRepository) {}

	async execute(email: string): Promise<IUser | null> {
		return this.userRepository.getByEmail(email);
	}
}

export { GetUserByEmailUseCase };
