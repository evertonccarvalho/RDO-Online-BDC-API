import { inject, injectable } from "tsyringe";
import { IProductDTO } from "../../infra/entities/Product";
import { IProductRepository } from "../../infra/repositories/IProductRepository";

@injectable()
class DeleteProductUseCase {
  constructor(
    @inject("ProductRepository")
    private productRepository: IProductRepository
  ) {}

  async execute(productId: string): Promise<void> {
    const product = await this.productRepository.readOne(productId);

    if (!product) {
      throw new Error("Produto não encontrado");
    }

    await this.productRepository.delete(productId);
  }
}

export { DeleteProductUseCase };
