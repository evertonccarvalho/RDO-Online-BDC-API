import { inject, injectable } from "tsyringe";
import { IUserAuthRepository } from "../../infra/repositories/IUserAuthRepository";
import bcrypt from "bcrypt";
import { jwtService } from "../../../../utils/jwt";

@injectable()
class UserLoginUseCase {
  constructor(
    @inject("UserAuthRepository")
    private userAuthRepository: IUserAuthRepository
  ) {}

  async execute(email: string, password: string): Promise<string | null> {
    const user = await this.userAuthRepository.login(email, password);

    if (!user) {
      return null; // Usuário não encontrado
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      const payload = {
        id: user.id,
        usuario: user.usuario,
        email: user.email,
      };

      const token = jwtService.signToken(payload, "15d");
      return token;
    }

    throw new Error("Senha incorreta");
  }
}

export { UserLoginUseCase };
