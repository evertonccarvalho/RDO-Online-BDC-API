import bcrypt from 'bcrypt';
import 'reflect-metadata';
import { IRegisterUser } from '../../interfaces/User';
import { MockUserRepository } from '../../repositories/MockUserRepository';
import { UserRegisterUseCase } from './UserRegisterUseCase';

describe('UserRegisterUseCase', () => {
	let userRepository: MockUserRepository;
	let userRegisterUseCase: UserRegisterUseCase;
	let mockUserData: IRegisterUser;

	beforeEach(() => {
		userRepository = new MockUserRepository();
		userRegisterUseCase = new UserRegisterUseCase(userRepository);
		mockUserData = {
			userName: 'john_doe',
			email: 'john@example.com',
			password: 'password123',
			confirmPassword: 'password123',
			role: '',
		};
	});

	it('deve registrar um usuário com sucesso', async () => {
		const hashPasswordSpy = jest.spyOn(bcrypt, 'hash');
		hashPasswordSpy.mockResolvedValue('hashedPassword' as never);

		await expect(
			userRegisterUseCase.execute(mockUserData, 'password123')
		).resolves.toBeUndefined();
	});

	it('deve lidar com erros ao registrar um usuário', async () => {
		userRepository.register = async (_: IRegisterUser): Promise<void> => {
			throw new Error('Erro ao registrar usuário');
		};

		await expect(
			userRegisterUseCase.execute(mockUserData, 'password123')
		).rejects.toThrow('Erro ao registrar usuário');
	});

	it('deve lançar um erro ao tentar registrar um usuário com dados inválidos', async () => {
		const mockUserDataInvalid = { ...mockUserData, password: 'password123456' }; // Senha inválida

		await expect(
			userRegisterUseCase.execute(mockUserDataInvalid, 'password123')
		).rejects.toThrow('Senha e confirmação de senha não correspondem');
	});
});
