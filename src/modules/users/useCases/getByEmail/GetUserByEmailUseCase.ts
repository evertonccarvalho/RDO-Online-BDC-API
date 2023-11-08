import { inject, injectable } from "tsyringe";
import { IUser } from "../../infra/entities/User";
import { IUserRepository } from "../../infra/repositories/IUserRepository";

@injectable()
class GetUserByEmailUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute(email: string): Promise<IUser | null> {
    return this.userRepository.getByEmail(email);
  }
}

export { GetUserByEmailUseCase };
