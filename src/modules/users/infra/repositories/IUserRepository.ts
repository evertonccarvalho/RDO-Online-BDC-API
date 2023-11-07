import { IUserDTO } from "../entities/User";

interface IUserRepository {
  getById(userId: number): Promise<IUserDTO | null>;
  read(): Promise<IUserDTO[]>;
  update(userId: number, updatedUserData: IUserDTO): Promise<void>;
  delete(puserId: number): Promise<void>;
}

export { IUserRepository };
