import { IUserDTO } from "../entities/User";
import { prisma } from "../../../../api/config/prisma";
import { IUserRepository } from "./IUserRepository";

class UserRepository implements IUserRepository {
  private adaptUser(prismaUser: any): IUserDTO {
    return {
      id: prismaUser.id,
      usuario: prismaUser.usuario,
      email: prismaUser.email,
      senha: prismaUser.password,
    };
  }

  async read(): Promise<IUserDTO[]> {
    const users = await prisma.usuario.findMany();

    // Adaptar os produtos usando a função de adaptação
    const adaptedUsers: IUserDTO[] = users.map(this.adaptUser);

    return adaptedUsers;
  }

  async getById(userId: number): Promise<IUserDTO | null> {
    const user = await prisma.usuario.findUnique({
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
    await prisma.usuario.update({
      where: {
        id: userId,
      },
      data: updatedUserData,
    });
  }

  async delete(userId: number): Promise<void> {
    await prisma.usuario.delete({
      where: {
        id: userId,
      },
    });
  }
}

export { UserRepository };
