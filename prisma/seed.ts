import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	await prisma.user.create({
		data: {
			userName: 'Éverton Carvalho',
			email: 'evertoncarvalho@email.com',
			avatarUrl: null,
			role: 'root',
			active: true,
			password: '$2b$10$l11sVUEG6IjUDiGEJ2PDC.vg6CjPpNXintZf4K4MxZvgsNTX6fst2',
		},
	});

	await prisma.user.create({
		data: {
			userName: 'admin',
			email: 'admin@email.com',
			avatarUrl: null,
			role: 'Administrador',
			active: true,
			password: '$2b$10$l11sVUEG6IjUDiGEJ2PDC.vg6CjPpNXintZf4K4MxZvgsNTX6fst2',
		},
	});
	await prisma.user.create({
		data: {
			userName: 'Usuário',
			email: 'user@email.com',
			avatarUrl: null,
			role: 'Usuário',
			active: true,
			password: '$2b$10$l11sVUEG6IjUDiGEJ2PDC.vg6CjPpNXintZf4K4MxZvgsNTX6fst2',
		},
	});

	// Seed para criar uma nova categoria
	const category = await prisma.serviceCategory.create({
		data: {
			name: 'Categoria Exemplo',
			status: 'Ativa', // ou qualquer outro status desejado
		},
	});

	// Seed para criar uma nova subcategoria associada à categoria criada anteriormente
	const subcategory = await prisma.subServiceCategory.create({
		data: {
			name: 'Subcategoria Exemplo',
			status: 'Ativa', // ou qualquer outro status desejado
			serviceCategoryId: category.id,

			// ID da categoria criada anteriormente
		},
	});

	// Seed para criar um novo serviço associado à subcategoria criada
	const service = await prisma.service.create({
		data: {
			serviceDescription: 'Descrição do Serviço',
			unit: 'Unidade de Medida',
			status: 'Ativo',
			subcategoryId: subcategory.id, // ID da subcategoria criada anteriormente
			workId: 1, // ID do trabalho associado, se necessário
			// Outros campos do serviço
		},
	});

	// Crie dados para o modelo Team
	const team = await prisma.team.create({
		data: {
			workId: 1, // Substitua com o ID correto da obra
			descricaoEquipe: 'Descrição da Equipe',
			empresaContratada: 'Nome da Empresa',
			status: 'Ativo', // Status da equipe
			Shifts: {
				create: [
					{
						workId: 1, // Substitua com o ID correto da obra
						description: 'Descrição do Turno 1',
						feasibility: 'Alta',
						weatherCondition: 'Ensolarado',
						status: 'Ativo',
					},
					{
						workId: 1, // Substitua com o ID correto da obra
						description: 'Descrição do Turno 2',
						feasibility: 'Média',
						weatherCondition: 'Chuvoso',
						status: 'Inativo',
					},
					// Adicione mais turnos conforme necessário
				],
			},
			Interferences: {
				create: [
					{
						workId: 1, // Substitua com o ID correto da obra
						interferenceResponsible: 'Responsável pela Interferência 1',
						category: 'Categoria 1',
						subCategory: 'Subcategoria 1',
						status: 'Ativo',
					},
					{
						workId: 1, // Substitua com o ID correto da obra
						interferenceResponsible: 'Responsável pela Interferência 2',
						category: 'Categoria 2',
						subCategory: 'Subcategoria 2',
						status: 'Inativo',
					},
					// Adicione mais interferências conforme necessário
				],
			},
		},
	});
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
