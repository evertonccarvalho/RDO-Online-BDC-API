import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteProductUseCase } from "./DeleteProductUseCase";

class DeleteProductController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { productId } = req.params;
    const deleteProductUseCase = container.resolve(DeleteProductUseCase);

    try {
      await deleteProductUseCase.execute(productId);

      return res.status(200).json({ message: "Produto deletado com sucesso" });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(404).json({ message: "Produto não encontrado" });
      }

      return res.status(500).json({ message: "Erro interno do servidor" });
    }
  }
}

export { DeleteProductController };
