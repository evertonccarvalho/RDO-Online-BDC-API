import { IProductDTO } from "../entities/Product";
import { prisma } from "../../../../lib/prisma";
import { IProductRepository } from "./IProductRepository";

class ProductRepository implements IProductRepository {
  private adaptProduct(prismaProduct: any): IProductDTO {
    return {
      id: prismaProduct.id,
      name: prismaProduct.name,
      slug: prismaProduct.slug,
      description: prismaProduct.description,
      basePrice: prismaProduct.basePrice.toNumber(),
      imageUrls: prismaProduct.imageUrls,
      categoryId: prismaProduct.categoryId,
      discountPercentage: prismaProduct.discountPercentage,
    };
  }

  async register({
    name,
    slug,
    description,
    basePrice,
    discountPercentage,
    imageUrls,
    categoryId,
  }: IProductDTO): Promise<void> {
    await prisma.product.create({
      data: {
        name,
        slug,
        description,
        basePrice,
        discountPercentage,
        imageUrls,
        categoryId,
      },
    });
  }

  async read(): Promise<IProductDTO[]> {
    const products = await prisma.product.findMany();

    // Adaptar os produtos usando a função de adaptação
    const adaptedProducts: IProductDTO[] = products.map(this.adaptProduct);

    return adaptedProducts;
  }

  async getById(productId: string): Promise<IProductDTO | null> {
    const product = await prisma.product.findUnique({
      where: {
        id: productId,
      },
    });

    if (!product) {
      return null; // Produto não encontrado
    }

    // Adaptar o produto usando a função de adaptação
    return this.adaptProduct(product);
  }

  async update(productId: string, updatedProductData: IProductDTO): Promise<void> {
    await prisma.product.update({
      where: {
        id: productId,
      },
      data: updatedProductData,
    });
  }

  async delete(productId: string): Promise<void> {
    await prisma.product.delete({
      where: {
        id: productId,
      },
    });
  }
}

export { ProductRepository };
