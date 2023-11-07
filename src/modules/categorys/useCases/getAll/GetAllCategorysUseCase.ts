import { inject, injectable } from "tsyringe";
import { ICategoryDTO } from "../../infra/entities/Category";
import { ICategoryRepository } from "../../infra/repositories/ICategoryRepository";

@injectable()
class GetAllCategorysUseCase {
  constructor(
    @inject("CategoryRepository")
    private productRepository: ICategoryRepository
  ) {}

  async execute(): Promise<ICategoryDTO[]> {
    return this.productRepository.read();
  }
}

export { GetAllCategorysUseCase };
