import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateCategoryUseCase } from "./UpdateCategoryUseCase";

class UpdateCategoryController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { categoryId } = req.params;
    const updatedCategoryData = req.body;
    const updateCategoryUseCase = container.resolve(UpdateCategoryUseCase);

    try {
      await updateCategoryUseCase.execute(categoryId, updatedCategoryData);
      return res.status(200).json({ message: "Categoria atualizado com sucesso" });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(404).json({ message: "Categoria não encontrado" });
      }

      return res.status(500).json({ message: "Erro interno do servidor" });
    }
  }
}

export { UpdateCategoryController };
