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
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
