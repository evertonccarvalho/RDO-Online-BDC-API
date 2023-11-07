import { ICategoryDTO } from "../entities/Category";

interface ICategoryRepository {
  register(category: ICategoryDTO): Promise<void>;
  read(): Promise<ICategoryDTO[]>;
  readOne(categoryId: string): Promise<ICategoryDTO | null>;
  update(categoryId: string, updatedCategoryData: ICategoryDTO): Promise<void>;
  delete(categoryId: string): Promise<void>;
}

export { ICategoryRepository };
