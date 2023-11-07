import { Request, Response } from "express";
import { IProductDTO } from "../../infra/entities/Product";
import { RegisterProducUseCase } from "./RegisterProducUseCase";
import { container } from "tsyringe";

class RegisterProductController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id, name, slug, description, basePrice, discountPercentage, imageUrls, categoryId }: IProductDTO =
      req.body;
    const registerUseCase = container.resolve(RegisterProducUseCase);
    await registerUseCase.execute({
      id,
      name,
      slug,
      description,
      basePrice,
      discountPercentage,
      imageUrls,
      categoryId,
    });

    return res.status(201).json({ message: "Registro realizado com sucesso!" });
  }
}

export { RegisterProductController };
