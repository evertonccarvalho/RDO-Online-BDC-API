import { Request, Response } from "express";
import { IProductDTO } from "../../infra/entities/Product";
import { GetProductByIdUseCase } from "./GetProductByIdUseCase";
import { container } from "tsyringe";

class GetProductByIdController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { productId } = req.params;
    const getProductByIdUseCase = container.resolve(GetProductByIdUseCase);
    const product = await getProductByIdUseCase.execute(productId);

    if (!product) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }

    return res.status(200).json(product);
  }
}

export { GetProductByIdController };
