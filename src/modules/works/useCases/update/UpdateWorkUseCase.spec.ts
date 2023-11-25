import 'reflect-metadata';
import { IWork } from '../../interfaces/Work';
import { MockWorkRepository } from '../../repositories/MockWorkRepository';
import { RegisterWorkUseCase } from '../register/RegisterWorkUseCase';
import { UpdateWorkUseCase } from './UpdateWorkUseCase';

class TestSetup {
	static createMockWorkRepository(): MockWorkRepository {
		return new MockWorkRepository();
	}
	static async createInitialWork(
		mockWorkRepository: MockWorkRepository,
		initialWorkData: IWork
	): Promise<void> {
		const registerWorkUseCase = new RegisterWorkUseCase(mockWorkRepository);
		await registerWorkUseCase.execute(initialWorkData);
	}
}

describe('UpdateWorkUseCase', () => {
	const initialWorkData: IWork = {
		id: 1,
		workDescription: 'Descrição do Trabalho Inicial',
		company: 'Empresa Inicial',
		logoUrl: 'https://example.com/logo-inicial.png',
		address: 'Endereço Inicial',
		nameResponsible: 'Responsável Inicial',
		phoneContact: '11111111111',
		active: false,
		createdAt: new Date(),
		updatedAt: new Date(),
	};

	const updatedWorkData: IWork = {
		id: 1,
		workDescription: 'Nova Descrição do Trabalho',
		company: 'Nova Empresa',
		logoUrl: 'https://example.com/logo-novo.png',
		address: 'Novo Endereço',
		nameResponsible: 'Novo Responsável',
		phoneContact: '22222222222',
		active: true,
		createdAt: new Date(),
		updatedAt: new Date(),
	};

	it('deve atualizar um trabalho existente', async () => {
		// Arrange
		const mockWorkRepository = TestSetup.createMockWorkRepository();
		await TestSetup.createInitialWork(mockWorkRepository, initialWorkData);
		const updateWorkUseCase = new UpdateWorkUseCase(mockWorkRepository);

		// ID do trabalho inicial registrado
		const initialWorkId = 1;

		// Act
		await updateWorkUseCase.execute(initialWorkId, updatedWorkData);

		// Assert
		const updatedWork = await mockWorkRepository.getById(initialWorkId);
		expect(updatedWork).toMatchObject(updatedWorkData);
	});
});
