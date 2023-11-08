import { inject, injectable } from "tsyringe";
import { IRegisterUser } from "../../../users/infra/entities/User";
import { IUserRepository } from "../../../users/infra/repositories/IUserRepository";
import bcrypt from "bcrypt";
@injectable()
class UserRegisterUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute(user: IRegisterUser): Promise<void> {
    // Verifique se o email já está em uso
    const existingUser = await this.userRepository.getByEmail(user.email);

    if (existingUser) {
      throw new Error("E-mail já registrado");
    }

    // Registre o novo usuário
    const saltRounds = 10; // Você pode ajustar o número de rounds conforme necessário
    const hashedPassword = await bcrypt.hash(user.senha, saltRounds);
    user.senha = hashedPassword;
    await this.userRepository.register(user);
  }
}

export { UserRegisterUseCase };
