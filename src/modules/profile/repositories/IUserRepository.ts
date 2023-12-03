import { IUser, IUserProfileUpdate } from '../../users/interfaces/IUser';

interface IUserRepository {
	update(id: number, updatedUserData: IUserProfileUpdate): Promise<void>;
}

export { IUserRepository };
