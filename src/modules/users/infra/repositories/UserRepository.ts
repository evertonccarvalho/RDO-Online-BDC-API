import { IUserDTO } from "../entities/User";
import { db } from "../../../../api/config/prisma";
import { IUserRepository } from "./IUserRepository";

class UserRepository implements IUserRepository {
  private adaptUser(dbUser: any): IUserDTO {
    return {
      id: dbUser.id,
      usuario: dbUser.usuario,
      email: dbUser.email,
      senha: dbUser.password,
    };
  }

  async read(): Promise<IUserDTO[]> {
    const users = await db.usuario.findMany();

    // Adaptar os produtos usando a função de adaptação
    const adaptedUsers: IUserDTO[] = users.map(this.adaptUser);

    return adaptedUsers;
  }

  async getById(userId: number): Promise<IUserDTO | null> {
    const user = await db.usuario.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      return null; // Produto não encontrado
    }

    // Adaptar o produto usando a função de adaptação
    return this.adaptUser(user);
  }

  async update(userId: number, updatedUserData: IUserDTO): Promise<void> {
    await db.usuario.update({
      where: {
        id: userId,
      },
      data: updatedUserData,
    });
  }

  async delete(userId: number): Promise<void> {
    await db.usuario.delete({
      where: {
        id: userId,
      },
    });
  }
}

export { UserRepository };
