import { Request, Response } from "express";
import { IProductDTO } from "../../infra/entities/Product";
import { GetAllProductsUseCase } from "./GetAllProductsUseCase";
import { container } from "tsyringe";

class GetAllProductsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const getAllProductsUseCase = container.resolve(GetAllProductsUseCase);
    const products = await getAllProductsUseCase.execute();

    return res.status(200).json(products);
  }
}

export { GetAllProductsController };
