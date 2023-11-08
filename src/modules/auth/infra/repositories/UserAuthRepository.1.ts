import { IUserLogin } from "../entities/User";
import { db } from "../../../../api/config/prisma";
import { IUserAuthRepository } from "./IUserAuthRepository";

class UserAuthRepository implements IUserAuthRepository {
  private adaptUser(dbUser: any): IUserLogin | null {
    if (!dbUser) {
      return null;
    }

    return {
      usuario: dbUser.usuario,
      email: dbUser.email,
      senha: dbUser.senha,
    };
  }

  async login(email: string, senha: string): Promise<IUserLogin | null> {
    const user = await db.usuario.findFirst({
      where: {
        email: email,
      },
    });

    return this.adaptUser(user); // Adaptar o usuário usando a função de adaptação
  }
}
export { UserAuthRepository };
