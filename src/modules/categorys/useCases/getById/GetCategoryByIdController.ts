import { Request, Response } from "express";
import { ICategoryDTO } from "../../infra/entities/Category";
import { GetCategoryByIdUseCase } from "./GetCategoryByIdUseCase";
import { container } from "tsyringe";

class GetCategoryByIdController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { categoryId } = req.params;
    const getCategoryByIdUseCase = container.resolve(GetCategoryByIdUseCase);
    const category = await getCategoryByIdUseCase.execute(categoryId);

    if (!category) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }

    return res.status(200).json(category);
  }
}

export { GetCategoryByIdController };
