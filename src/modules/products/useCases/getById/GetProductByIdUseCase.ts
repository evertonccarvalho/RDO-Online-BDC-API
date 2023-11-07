import { inject, injectable } from "tsyringe";
import { IProductDTO } from "../../infra/entities/Product";
import { IProductRepository } from "../../infra/repositories/IProductRepository";

@injectable()
class GetProductByIdUseCase {
  constructor(
    @inject("ProductRepository")
    private productRepository: IProductRepository
  ) {}

  async execute(productId: string): Promise<IProductDTO | null> {
    return this.productRepository.getById(productId);
  }
}

export { GetProductByIdUseCase };
