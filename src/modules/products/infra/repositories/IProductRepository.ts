import { IProductDTO } from "../entities/Product";

interface IProductRepository {
  register(product: IProductDTO): Promise<void>;
  read(): Promise<IProductDTO[]>;
  getById(productId: string): Promise<IProductDTO | null>;
  update(productId: string, updatedProductData: IProductDTO): Promise<void>;
  delete(productId: string): Promise<void>;
}

export { IProductRepository };
