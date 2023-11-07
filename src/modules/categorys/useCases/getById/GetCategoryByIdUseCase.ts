import { inject, injectable } from "tsyringe";
import { ICategoryDTO } from "../../infra/entities/Category";
import { ICategoryRepository } from "../../infra/repositories/ICategoryRepository";

@injectable()
class GetCategoryByIdUseCase {
  constructor(
    @inject("CategoryRepository")
    private categoryRepository: ICategoryRepository
  ) {}

  async execute(categoryId: string): Promise<ICategoryDTO | null> {
    return this.categoryRepository.readOne(categoryId);
  }
}

export { GetCategoryByIdUseCase };
