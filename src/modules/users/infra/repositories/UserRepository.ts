import { IRegisterUser, IUser } from "../entities/User";
import { db } from "../../../../api/config/prisma";
import { IUserRepository } from "./IUserRepository";

class UserRepository implements IUserRepository {
  async register({ usuario, email, password, idObra, role }: IRegisterUser): Promise<void> {
    await db.usuario.create({
      data: {
        usuario,
        email,
        password,
        role,
        ativo: true, // ou outro valor apropriado
        obra: { connect: idObra ? { id: idObra } : undefined }, // Conectar à obra apropriada
      },
    });
  }

  async read(): Promise<IUser[]> {
    const users = await db.usuario.findMany({
      include: {
        obra: true,
      },
    });

    // Ajuste a tipagem para garantir que a propriedade 'obra' seja um array ou nulo
    const adjustedUsers: IUser[] = users.map((user) => ({
      ...user,
      obra: user.obra ? [user.obra] : null,
    }));

    return adjustedUsers;
  }

  async getById(userId: number): Promise<IUser | null> {
    const user = await db.usuario.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        idObra: true,
        usuario: true,
        email: true,
        ativo: true,
        role: true,
        dataCriacao: true,
        obra: true, // Inclua outras propriedades da 'obra' se necessário
      },
    });

    if (!user) {
      return null; // Usuário não encontrado
    }

    // Ajuste a propriedade 'obra' para ser um array ou nulo conforme necessário
    const adjustedUser: IUser = {
      ...user,
      obra: user.obra ? [user.obra] : null,
    };

    return adjustedUser;
  }

  async getByEmail(email: string): Promise<IUser | null> {
    const user = await db.usuario.findFirst({
      where: {
        email,
      },
      select: {
        id: true,
        idObra: true,
        usuario: true,
        email: true,
        ativo: true,
        role: true,
        dataCriacao: true,
        obra: true, // Inclua outras propriedades da 'obra' se necessário
      },
    });

    if (!user) {
      return null; // Usuário não encontrado
    }

    // Ajuste a propriedade 'obra' para ser um array ou nulo conforme necessário
    const adjustedUser: IUser = {
      ...user,
      obra: user.obra ? [user.obra] : null,
    };

    return adjustedUser;
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
