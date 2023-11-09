import { IRegisterUser, IUser } from "../entities/User";
import { db } from "../../../../api/config/prisma";
import { IUserRepository } from "./IUserRepository";

class UserRepository implements IUserRepository {
  private adaptUser(dbUser: IUser) {
    return {
      id: dbUser.id,
      usuario: dbUser.usuario,
      email: dbUser.email,
    };
  }

  async register({ usuario, email, password, idObra }: IRegisterUser): Promise<void> {
    await db.usuario.create({
      data: {
        usuario,
        email,
        password,
        ativo: true, // ou outro valor apropriado
        obra: { connect: idObra ? { id: idObra } : undefined }, // Conectar à obra apropriada
      },
    });
  }

  async read(): Promise<IUser[]> {
    const users = await db.usuario.findMany();

    // Adaptar os produtos usando a função de adaptação
    const adaptedUsers: IUser[] = users.map(this.adaptUser);

    return adaptedUsers;
  }

  async getById(userId: number): Promise<IUser | null> {
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

  async getByEmail(email: string): Promise<IUser | null> {
    const user = await db.usuario.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      return null; // Usuário não encontrado
    }

    // Adaptar o usuário usando a função de adaptação
    return this.adaptUser(user);
  }

  async update(userId: number, updatedUserData: IUser): Promise<void> {
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
