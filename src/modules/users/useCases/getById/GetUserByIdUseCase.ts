import { inject, injectable } from "tsyringe";
import { IUserDTO } from "../../infra/entities/User";
import { IUserRepository } from "../../infra/repositories/IUserRepository";

@injectable()
class GetUserByIdUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute(userId: string): Promise<IUserDTO | null> {
    return this.userRepository.getById(userId);
  }
}

export { GetUserByIdUseCase };
