import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteCategoryUseCase } from "./DeleteCategoryUseCase";

class DeleteCategoryController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { categoryId } = req.params;
    const deleteCategoryUseCase = container.resolve(DeleteCategoryUseCase);

    try {
      await deleteCategoryUseCase.execute(categoryId);

      return res.status(200).json({ message: "Categoria deletado com sucesso" });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(404).json({ message: "Categoria não encontrado" });
      }

      return res.status(500).json({ message: "Erro interno do servidor" });
    }
  }
}

export { DeleteCategoryController };
