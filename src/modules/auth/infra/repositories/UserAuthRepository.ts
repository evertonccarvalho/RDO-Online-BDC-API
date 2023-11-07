import { IUserDTO } from "../entities/User";
import { prisma } from "../../../../lib/prisma";
import { IUserAuthRepository } from "./IUserAuthRepository";

class UserAuthRepository implements IUserAuthRepository {
  async register({ usuario, email, senha, idObra }: IUserDTO): Promise<void> {
    await prisma.usuario.create({
      data: {
        usuario,
        email,
        senha,
        // ou outro valor apropriado
        ativo: true, // ou outro valor apropriado
        obra: { connect: idObra ? { id: idObra } : undefined }, // Conectar à obra apropriada
      },
    });
  }

  async login(email: string): Promise<IUserDTO | null> {
    const user = await prisma.usuario.findFirst({
      where: {
        email: email,
      },
    });

    return user || null;
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

    return user || null;
  }
}

export { UserAuthRepository };
