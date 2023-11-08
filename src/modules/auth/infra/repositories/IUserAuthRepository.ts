import { IUserLogin } from "../entities/User";

interface IUserAuthRepository {
  login(email: string, senha: string): Promise<IUserLogin | null>;
  // getByEmail(email: string): Promise<IUserLogin | null>;
}

export { IUserAuthRepository };
