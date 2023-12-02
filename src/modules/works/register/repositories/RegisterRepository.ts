import { db } from '../../../../api/config/prisma';
import { IWork } from '../interfaces/IRegisterWork';
import { IRegisterRepository } from './IRegisterRepository';

class RegisterRepository implements IRegisterRepository {
	async register(userId: number, work: IWork): Promise<IWork> {
		const newWork = await db.work.create({
			data: {
				active: work.active,
				address: work.address,
				company: work.company,
				createdAt: work.createdAt,
				updatedAt: work.updatedAt,
				logoUrl: work.logoUrl,
				nameResponsible: work.nameResponsible,
				phoneContact: work.phoneContact,
				workDescription: work.workDescription,
				userId: userId, // Use userId diretamente se 'userId' for a chave estrangeira em 'Work'
			},
		});
		return newWork;
	}
}

export { RegisterRepository };
