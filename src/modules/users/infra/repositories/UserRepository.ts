import { IRegisterUser, IUser } from "../entities/User";
import { db } from "../../../../api/config/prisma";
import { IUserRepository } from "./IUserRepository";

class UserRepository implements IUserRepository {
  async register({ usuario, email, password, role }: IRegisterUser): Promise<void> {
    await db.usuario.create({
      data: {
        usuario,
        email,
        password,
        role,
        ativo: true,
      },
    });
  }

  async read(): Promise<IUser[]> {
    const users = await db.usuario.findMany({
      select: {
        id: true,
        usuario: true,
        email: true,
        avatarUrl: true,
        role: true,
        ativo: true,
        dataCriacao: true,
        idObra: true,
        obra: true,
      },
    });

    // Ajuste a tipagem para garantir que a propriedade 'obra' seja um array ou nulo
    return users;
  }

  async getById(userId: number): Promise<IUser | null> {
    const user = await db.usuario.findUnique({
      where: {
        id: userId, // Fornecer o valor para o campo id
      },
      select: {
        id: true,
        idObra: true,
        usuario: true,
        email: true,
        avatarUrl: true,
        role: true,
        ativo: true,
        dataCriacao: true,
        obra: true,
      },
    });

    if (!user) {
      return null; // Usuário não encontrado
    }

    // Ajuste a propriedade 'obra' para ser um array ou nulo conforme necessário

    return user;
  }

  async getByEmail(email: string): Promise<IUser | null> {
    const user = await db.usuario.findFirst({
      where: {
        email,
      },
      select: {
        id: true,
        usuario: true,
        email: true,
        avatarUrl: true,
        role: true,
        ativo: true,
        dataCriacao: true,
        idObra: true,
        obra: true,
      },
    });

    if (!user) {
      return null; // Usuário não encontrado
    }

    return user;
  }

  async update(userId: number, updatedUserData: IUser): Promise<void> {
    await db.usuario.updateMany({
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
