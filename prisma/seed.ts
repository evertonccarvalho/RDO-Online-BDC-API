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
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
