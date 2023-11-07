import { inject, injectable } from "tsyringe";
import { IUserDTO } from "../../infra/entities/User";
import { IUserRepository } from "../../infra/repositories/IUserRepository";

@injectable()
class GetAllUsersUseCase {
  constructor(
    @inject("UserRepository")
    private productRepository: IUserRepository
  ) {}

  async execute(): Promise<IUserDTO[]> {
    return this.productRepository.read();
  }
}

export { GetAllUsersUseCase };
