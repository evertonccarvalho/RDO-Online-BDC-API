import { inject, injectable } from "tsyringe";
import { IUser } from "../../infra/entities/User";
import { IUserRepository } from "../../infra/repositories/IUserRepository";

@injectable()
class GetUserByIdUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute(userId: number): Promise<IUser | null> {
    return this.userRepository.getById(userId);
  }
}

export { GetUserByIdUseCase };
