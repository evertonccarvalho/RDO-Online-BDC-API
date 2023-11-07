import { Request, Response } from "express";
import { ICategoryDTO } from "../../infra/entities/Category";
import { RegisterCategoryUseCase } from "./RegisterCategoryUseCase";
import { container } from "tsyringe";

class RegisterCategoryController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id, name, slug, imageUrl }: ICategoryDTO = req.body;
    const registerUseCase = container.resolve(RegisterCategoryUseCase);
    await registerUseCase.execute({
      id,
      name,
      slug,

      imageUrl,
    });

    return res.status(201).json({ message: "Registro realizado com sucesso!" });
  }
}

export { RegisterCategoryController };
