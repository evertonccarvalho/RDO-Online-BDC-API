import { inject, injectable } from "tsyringe";
import { ICategoryDTO } from "../../infra/entities/Category";
import { ICategoryRepository } from "../../infra/repositories/ICategoryRepository";

@injectable()
class UpdateCategoryUseCase {
  constructor(
    @inject("CategoryRepository")
    private categoryRepository: ICategoryRepository
  ) {}

  async execute(categoryId: string, updatedCategoryData: ICategoryDTO): Promise<void> {
    const category = await this.categoryRepository.readOne(categoryId);

    if (!category) {
      throw new Error("Categoria não encontrado");
    }

    await this.categoryRepository.update(categoryId, updatedCategoryData);
  }
}

export { UpdateCategoryUseCase };
