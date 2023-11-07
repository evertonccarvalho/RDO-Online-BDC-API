import { inject, injectable } from "tsyringe";
import { IProductDTO } from "../../infra/entities/Product";
import { IProductRepository } from "../../infra/repositories/IProductRepository";

@injectable()
class GetAllProductsUseCase {
  constructor(
    @inject("ProductRepository")
    private productRepository: IProductRepository
  ) {}

  async execute(): Promise<IProductDTO[]> {
    return this.productRepository.read();
  }
}

export { GetAllProductsUseCase };
