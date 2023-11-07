import { inject, injectable } from "tsyringe";
import { IProductDTO } from "../../infra/entities/Product";
import { IProductRepository } from "../../infra/repositories/IProductRepository";

@injectable()
class RegisterProducUseCase {
  constructor(
    @inject("ProductRepository")
    private ProductRepository: IProductRepository
  ) {}
  async execute({
    id,
    name,
    slug,
    description,
    basePrice,
    discountPercentage,
    imageUrls,
    categoryId,
  }: IProductDTO): Promise<void> {
    await this.ProductRepository.register({
      id,
      name,
      slug,
      description,
      basePrice,
      discountPercentage,
      imageUrls,
      categoryId,
    });
  }
}

export { RegisterProducUseCase };
