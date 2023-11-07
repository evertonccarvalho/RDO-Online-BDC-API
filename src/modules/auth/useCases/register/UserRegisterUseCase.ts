import { inject, injectable } from "tsyringe";
import { IUserDTO } from "../../infra/entities/User";
import { IUserAuthRepository } from "../../infra/repositories/IUserAuthRepository";
import bcrypt from "bcrypt";
@injectable()
class UserRegisterUseCase {
  constructor(
    @inject("UserAuthRepository")
    private userAuthRepository: IUserAuthRepository
  ) {}

  async execute(userDTO: IUserDTO): Promise<void> {
    // Verifique se o email já está em uso
    const existingUser = await this.userAuthRepository.login(userDTO.email);

    if (existingUser) {
      throw new Error("E-mail já registrado");
    }

    // Registre o novo usuário
    const saltRounds = 10; // Você pode ajustar o número de rounds conforme necessário
    const hashedPassword = await bcrypt.hash(userDTO.senha, saltRounds);
    userDTO.senha = hashedPassword;
    await this.userAuthRepository.register(userDTO);
  }
}

export { UserRegisterUseCase };
