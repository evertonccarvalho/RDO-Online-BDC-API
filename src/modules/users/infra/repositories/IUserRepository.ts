import { IUserDTO } from "../entities/User";

interface IUserRepository {
  register(user: IUserDTO): Promise<void>;
  read(): Promise<IUserDTO[]>;
  getById(userId: string): Promise<IUserDTO | null>;
  update(userId: string, updatedUserData: IUserDTO): Promise<void>;
  delete(puserId: string): Promise<void>;
}

export { IUserRepository };
