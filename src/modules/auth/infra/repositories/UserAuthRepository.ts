import { IUserDTO } from "../entities/User";
import { prisma } from "../../../../lib/prisma";
import { IUserAuthRepository } from "./IUserAuthRepository";

class UserAuthRepository implements IUserAuthRepository {
  private adaptUser(prismaUser: any): IUserDTO {
    return {
      id: prismaUser.id,
      name: prismaUser.name,
      email: prismaUser.emal,
      password: prismaUser.password,
      phone: prismaUser.phone,
    };
  }

  async register({ name, email, password, phone }: IUserDTO): Promise<void> {
    await prisma.user.create({
      data: {
        name,
        email,
        password,
        phone,
      },
    });
  }

  async login(email: string): Promise<IUserDTO | null> {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      return null; // Usuario não encontrado não encontrado
    }

    // Adaptar o Usuario usando a função de adaptação
    return this.adaptUser(user);
  }

  async getById(userId: string): Promise<IUserDTO | null> {
    const user = await prisma.user.findUnique({
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
}

export { UserAuthRepository };
