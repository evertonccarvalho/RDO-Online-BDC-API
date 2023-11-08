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

  async execute(email: string, senha: string): Promise<string | null> {
    const user = await this.userAuthRepository.login(email, senha);

    if (!user) {
      return null; // Usuário não encontrado
    }

    const passwordMatch = await bcrypt.compare(senha, user.senha);

    if (passwordMatch) {
      const payload = {
        id: user.id,
        usuario: user.usuario,
        email: user.email,
      };

      const token = jwtService.signToken(payload, "15d");

      return token; // Retorna o token JWT em vez do objeto do usuário
    }

    throw new Error("Senha incorreta");
  }
}

export { UserLoginUseCase };
