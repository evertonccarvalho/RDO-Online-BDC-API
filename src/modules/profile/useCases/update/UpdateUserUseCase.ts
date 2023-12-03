import { IUser, IUserProfileUpdate } from '../../../users/interfaces/IUser';
import { IUserRepository } from '../../repositories/IUserRepository';

class UpdateUserUseCase {
	constructor(private userRepository: IUserRepository) {}

	async execute(
		id: number,
		updatedUserData: IUserProfileUpdate
	): Promise<void> {
		try {
			await this.userRepository.update(id, updatedUserData);
		} catch (error) {
			console.error('Ocorreu um erro durante a execução:', error);
			throw new Error(
				'Houve um erro ao executar a atualização dos dados do usuário.'
			);
		}
	}
}
export { UpdateUserUseCase };
