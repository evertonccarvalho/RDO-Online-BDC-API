import { inject, injectable } from "tsyringe";
import { ICategoryDTO } from "../../infra/entities/Category";
import { ICategoryRepository } from "../../infra/repositories/ICategoryRepository";

@injectable()
class DeleteCategoryUseCase {
  constructor(
    @inject("CategoryRepository")
    private categoryRepository: ICategoryRepository
  ) {}

  async execute(categoryId: string): Promise<void> {
    const category = await this.categoryRepository.readOne(categoryId);

    if (!category) {
      throw new Error("Produto não encontrado");
    }

    await this.categoryRepository.delete(categoryId);
  }
}

export { DeleteCategoryUseCase };
