import { IUserLogin } from "../entities/User";
import { db } from "../../../../api/config/prisma";
import { IUserAuthRepository } from "./IUserAuthRepository";

class UserAuthRepository implements IUserAuthRepository {
  async login(email: string, password: string): Promise<IUserLogin | null> {
    const user = await db.usuario.findFirst({
      where: {
        email: email,
      },
    });

    return user; // Adaptar o usuário usando a função de adaptação
  }
}
export { UserAuthRepository };
