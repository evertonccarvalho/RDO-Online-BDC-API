import 'reflect-metadata';
import { IWork } from '../../interfaces/Work';
import { MockWorkRepository } from '../../repositories/MockWorkRepository';
import { RegisterWorkUseCase } from './RegisterWorkUseCase';

export class TestSetup {
	workRepository: MockWorkRepository;
	registerWorkUseCase: RegisterWorkUseCase;
	mockWorkData: IWork;

	constructor() {
		this.workRepository = new MockWorkRepository();
		this.registerWorkUseCase = new RegisterWorkUseCase(this.workRepository);
		this.mockWorkData = this.createMockWorkData();
	}

	createMockWorkData(): IWork {
		return {
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
	}
}

describe('RegisterWorkUseCase', () => {
	const testSetup = new TestSetup();

	it('deve registrar um trabalho com sucesso', async () => {
		const registerWorkPromise = testSetup.registerWorkUseCase.execute(
			testSetup.mockWorkData
		);
		await expect(registerWorkPromise).resolves.toBeUndefined();
	});

	it('deve lidar com erros ao registrar um trabalho', async () => {
		testSetup.workRepository.register = async (_: IWork): Promise<void> => {
			throw new Error('Erro ao registrar obra');
		};

		const registerWorkPromise = testSetup.registerWorkUseCase.execute(
			testSetup.mockWorkData
		);
		await expect(registerWorkPromise).rejects.toThrow('Erro ao registrar obra');
	});

	it('deve lançar um erro ao tentar registrar uma obra com Endereço menor que 10 caracteres', async () => {
		const mockWorkDataInvalidAddress = testSetup.createMockWorkData();
		mockWorkDataInvalidAddress.address = 'Endereço0'; // Endereço menor que 10 caracteres

		await expect(
			testSetup.registerWorkUseCase.execute(mockWorkDataInvalidAddress)
		).rejects.toThrow('Endereço da obra deve conter pelo menos 10 caracteres');
	});
});
