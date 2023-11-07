import { ICategoryDTO } from "../entities/Category";
import { prisma } from "../../../../lib/prisma";
import { ICategoryRepository } from "./ICategoryRepository";

class CategoryRepository implements ICategoryRepository {
  private adaptCategory(prismaCategory: any): ICategoryDTO {
    return {
      id: prismaCategory.id,
      name: prismaCategory.name,
      slug: prismaCategory.slug,
      imageUrl: prismaCategory.imageUrl,
    };
  }

  async register({ name, slug, imageUrl }: ICategoryDTO): Promise<void> {
    await prisma.category.create({
      data: {
        name,
        slug,
        imageUrl,
      },
    });
  }

  async read(): Promise<ICategoryDTO[]> {
    const categorys = await prisma.category.findMany();

    // Adaptar os produtos usando a função de adaptação
    const adaptedCategorys: ICategoryDTO[] = categorys.map(this.adaptCategory);

    return adaptedCategorys;
  }

  async readOne(categoryId: string): Promise<ICategoryDTO | null> {
    const category = await prisma.category.findUnique({
      where: {
        id: categoryId,
      },
    });

    if (!category) {
      return null; // Produto não encontrado
    }

    // Adaptar o produto usando a função de adaptação
    return this.adaptCategory(category);
  }

  async update(categoryId: string, updatedCategoryData: ICategoryDTO): Promise<void> {
    await prisma.category.update({
      where: {
        id: categoryId,
      },
      data: updatedCategoryData,
    });
  }

  async delete(categoryId: string): Promise<void> {
    await prisma.category.delete({
      where: {
        id: categoryId,
      },
    });
  }
}

export { CategoryRepository };
