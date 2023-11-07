import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateProductUseCase } from "./UpdateProductUseCase";

class UpdateProductController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { productId } = req.params;
    const updatedProductData = req.body;
    const updateProductUseCase = container.resolve(UpdateProductUseCase);

    try {
      await updateProductUseCase.execute(productId, updatedProductData);
      return res.status(200).json({ message: "Produto atualizado com sucesso" });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(404).json({ message: "Produto não encontrado" });
      }

      return res.status(500).json({ message: "Erro interno do servidor" });
    }
  }
}

export { UpdateProductController };
