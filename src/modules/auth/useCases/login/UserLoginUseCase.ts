import { inject, injectable } from "tsyringe";
import { IUserDTO } from "../../infra/entities/User";
import { IUserAuthRepository } from "../../infra/repositories/IUserAuthRepository";
import { jwtService } from "../../../../utils/jwt";
import bcrypt from "bcrypt";

@injectable()
class UserLoginUseCase {
  constructor(
    @inject("UserAuthRepository")
    private userAuthRepository: IUserAuthRepository
  ) {}

  async execute(email: string, password: string): Promise<IUserDTO | null> {
    const user = await this.userAuthRepository.login(email);

    if (!user) {
      return null; // Usuário não encontrado
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      return user; // Senha válida, usuário autenticado
    }

    throw new Error("Senha incorreta");
  }
}

export { UserLoginUseCase };
