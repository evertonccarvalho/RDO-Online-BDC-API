import { IUserDTO } from "../entities/User";
import { prisma } from "../../../../lib/prisma";
import { IUserRepository } from "./IUserRepository";

class UserRepository implements IUserRepository {
  private adaptUser(prismaUser: any): IUserDTO {
    return {
      id: prismaUser.id,
      name: prismaUser.name,
      email: prismaUser.email,
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

  async read(): Promise<IUserDTO[]> {
    const users = await prisma.user.findMany();

    // Adaptar os produtos usando a função de adaptação
    const adaptedUsers: IUserDTO[] = users.map(this.adaptUser);

    return adaptedUsers;
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

  async update(userId: string, updatedUserData: IUserDTO): Promise<void> {
    await prisma.user.update({
      where: {
        id: userId,
      },
      data: updatedUserData,
    });
  }

  async delete(userId: string): Promise<void> {
    await prisma.user.delete({
      where: {
        id: userId,
      },
    });
  }
}

export { UserRepository };
