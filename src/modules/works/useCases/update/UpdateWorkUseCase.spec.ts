import 'reflect-metadata';
import { IWork } from '../../interfaces/Work';
import { MockWorkRepository } from '../../repositories/MockWorkRepository';
import { RegisterWorkUseCase } from '../register/RegisterWorkUseCase';
import { UpdateWorkUseCase } from './UpdateWorkUseCase'; // Suponhamos que exista a classe UpdateWorkUseCase

describe('UpdateWorkUseCase', () => {
	it('deve atualizar um trabalho existente', async () => {
		// Arrange
		const mockWorkRepository = new MockWorkRepository();
		const registerWorkUseCase = new RegisterWorkUseCase(mockWorkRepository);
		const updateWorkUseCase = new UpdateWorkUseCase(mockWorkRepository);

		// Crie um trabalho inicial para atualizar
		const initialWorkData: IWork = {
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

		await registerWorkUseCase.execute(initialWorkData); // Registre um trabalho inicial

		// Dados de atualização
		const updatedWorkData: IWork = {
			id: 1,
			workDescription: 'NOVAI Descrição da Obra',
			company: 'NOVA Nome da Empresa',
			logoUrl: 'NOVA https://example.com/logo.png',
			address: 'NOVA Endereço Completo',
			nameResponsible: 'NOVA Nome do Responsável',
			phoneContact: '888',
			active: true,
			createdAt: new Date(),
			updatedAt: new Date(),
		};

		// Act
		const initialWorkId = 1; // Obtenha o ID do trabalho inicial que você registrou
		await updateWorkUseCase.execute(initialWorkId, updatedWorkData);
		// Assert
		const updatedWork = await mockWorkRepository.getById(1);
		expect(updatedWork?.workDescription).toBe('NOVAI Descrição da Obra');
		expect(updatedWork?.company).toBe('NOVA Nome da Empresa');
		expect(updatedWork?.logoUrl).toBe('NOVA https://example.com/logo.png');
		expect(updatedWork?.address).toBe('NOVA Endereço Completo');
		expect(updatedWork?.nameResponsible).toBe('NOVA Nome do Responsável');
		expect(updatedWork?.phoneContact).toBe('888');
		expect(updatedWork?.active).toBe(true);
	});
});
