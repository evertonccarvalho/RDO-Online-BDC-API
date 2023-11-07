import { Request, Response } from "express";
import { ICategoryDTO } from "../../infra/entities/Category";
import { GetAllCategorysUseCase } from "./GetAllCategorysUseCase";
import { container } from "tsyringe";

class GetAllCategorysController {
  async handle(req: Request, res: Response): Promise<Response> {
    const getAllCategorysUseCase = container.resolve(GetAllCategorysUseCase);
    const categorys = await getAllCategorysUseCase.execute();

    return res.status(200).json(categorys);
  }
}

export { GetAllCategorysController };
