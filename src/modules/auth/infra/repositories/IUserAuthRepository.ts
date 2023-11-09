import { IUserLogin } from "../entities/User";

interface IUserAuthRepository {
  login(email: string, password: string): Promise<IUserLogin | null>;
}

export { IUserAuthRepository };
