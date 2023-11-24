import 'reflect-metadata';
import { IWork } from '../../interfaces/Work';
import { MockWorkRepository } from '../../repositories/MockWorkRepository';
import { RegisterWorkUseCase } from './RegisterWorkUseCase';

describe('RegisterWorkUseCase', () => {
	it('deve registrar um trabalho com sucesso', async () => {
		// Arrange
		const mockWorkRepository = new MockWorkRepository();
		const registerWorkUseCase = new RegisterWorkUseCase(mockWorkRepository);
		const mockWorkData: IWork = {
			id: 1,
			workDescription: 'Descrição da Obra',
			company: 'Nome da Empresa',
			logoUrl: 'https://example.com/logo.png',
			address: 'Endereço Completo',
			nameResponsible: 'Nome do Responsável',
			phoneContact: '88999999999',
			active: false,
			createdAt: new Date(),
			updatedAt: new Date(),
		};
		// Act
		const registerWorkPromise = registerWorkUseCase.execute(mockWorkData);

		// Assert
		await expect(registerWorkPromise).resolves.toBeUndefined();
	});

	it('deve lidar com erros ao registrar um trabalho', async () => {
		// Arrange
		const mockWorkRepository = new MockWorkRepository();
		mockWorkRepository.register = async (_: IWork): Promise<void> => {
			// Simular um erro ao registrar o trabalho
			throw new Error('Erro ao registrar obra');
		};
		const registerWorkUseCase = new RegisterWorkUseCase(mockWorkRepository);
		const mockWorkData: IWork = {
			id: 1,
			workDescription: 'Descrição da Obra',
			company: 'Nome da Empresa',
			logoUrl: 'https://example.com/logo.png',
			address: 'Endereço Completo',
			nameResponsible: 'Nome do Responsável',
			phoneContact: '88999999999',
			active: false,
			createdAt: new Date(),
			updatedAt: new Date(),
		};

		// Act
		const registerWorkPromise = registerWorkUseCase.execute(mockWorkData);

		// Assert
		await expect(registerWorkPromise).rejects.toThrow('Erro ao registrar obra');
	});

	it('deve lançar um erro ao tentar registrar uma obra com Endereço menor que 10 caracteres', async () => {
		// Arrange
		const mockWorkRepository = new MockWorkRepository();
		const registerWorkUseCase = new RegisterWorkUseCase(mockWorkRepository);
		const mockWorkData: IWork = {
			id: 1, // Defina um ID válido
			workDescription: 'Descrição da Obra',
			company: 'Nome da Empresa',
			logoUrl: 'https://example.com/logo.png',
			address: 'Ende', // Endereço menor que 10 caracteres
			nameResponsible: 'Nome do Responsável',
			phoneContact: '88999999999',
			active: false,
			createdAt: new Date(),
			updatedAt: new Date(),
		};

		// Act & Assert
		await expect(registerWorkUseCase.execute(mockWorkData)).rejects.toThrow(
			'Endereço da obra deve conter pelo menos 10 caracteres'
		);
	});
});
