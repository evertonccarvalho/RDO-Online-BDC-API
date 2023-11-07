import { IUserDTO } from "../entities/User";

interface IUserAuthRepository {
  register(user: IUserDTO): Promise<void>;
  login(email: string): Promise<IUserDTO | null>;
  getById(userId: string): Promise<IUserDTO | null>;
}

export { IUserAuthRepository };
