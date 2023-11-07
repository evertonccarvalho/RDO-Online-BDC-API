import { inject, injectable } from "tsyringe";
import { IUserDTO } from "../../infra/entities/User";
import { IUserRepository } from "../../infra/repositories/IUserRepository";

@injectable()
class UpdateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute(userId: string, updatedUserData: IUserDTO): Promise<void> {
    const user = await this.userRepository.getById(userId);

    if (!user) {
      throw new Error("Usuario não encontrado");
    }

    await this.userRepository.update(userId, updatedUserData);
  }
}

export { UpdateUserUseCase };
