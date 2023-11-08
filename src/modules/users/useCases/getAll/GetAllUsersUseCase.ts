import { inject, injectable } from "tsyringe";
import { IUser } from "../../infra/entities/User";
import { IUserRepository } from "../../infra/repositories/IUserRepository";

@injectable()
class GetAllUsersUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute(): Promise<IUser[]> {
    return this.userRepository.read();
  }
}

export { GetAllUsersUseCase };
