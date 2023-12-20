import { WorkUser } from '@prisma/client';

interface IWorkUserRepository {
	create(userId: number, workId: number): Promise<void>;
	findByUserId(userId: number): Promise<WorkUser[]>; // Corrigir o retorno para corresponder à implementação real
	findByWorkId(workId: number): Promise<WorkUser[]>; // Mesma correção aqui, se necessário
	delete(userId: number, workId: number): Promise<void>;
}

export { IWorkUserRepository };
