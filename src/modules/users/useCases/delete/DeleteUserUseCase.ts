import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../infra/repositories/IUserRepository";

@injectable()
class DeleteUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute(userId: string): Promise<void> {
    const user = await this.userRepository.getById(userId);

    if (!user) {
      throw new Error("Produto não encontrado");
    }

    await this.userRepository.delete(userId);
  }
}

export { DeleteUserUseCase };
