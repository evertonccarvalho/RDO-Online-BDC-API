import { inject, injectable } from "tsyringe";
import { ICategoryDTO } from "../../infra/entities/Category";
import { ICategoryRepository } from "../../infra/repositories/ICategoryRepository";

@injectable()
class RegisterCategoryUseCase {
  constructor(
    @inject("CategoryRepository")
    private CategoryRepository: ICategoryRepository
  ) {}
  async execute({ id, name, slug, imageUrl }: ICategoryDTO): Promise<void> {
    await this.CategoryRepository.register({
      id,
      name,
      slug,

      imageUrl,
    });
  }
}

export { RegisterCategoryUseCase };
