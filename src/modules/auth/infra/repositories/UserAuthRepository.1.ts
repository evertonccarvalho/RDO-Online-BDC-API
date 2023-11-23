import { db } from '../../../../api/config/prisma';
import { IUserLogin } from '../entities/User';
import { IUserAuthRepository } from './IUserAuthRepository';

class UserAuthRepository implements IUserAuthRepository {
	async login(email: string, password: string): Promise<IUserLogin | null> {
		const user = await db.user.findFirst({
			where: {
				email: email,
			},
		});

		return user;
	}
}
export { UserAuthRepository };
