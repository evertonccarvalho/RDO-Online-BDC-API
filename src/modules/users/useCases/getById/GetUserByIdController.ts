import { Request, Response } from "express";
import { GetUserByIdUseCase } from "./GetUserByIdUseCase";
import { container } from "tsyringe";

class GetUserByIdController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { userId } = req.params;
    const getUserByIdUseCase = container.resolve(GetUserByIdUseCase);
    const user = await getUserByIdUseCase.execute(+userId);

    if (!user) {
      return res.status(404).json({ message: "Usuario não encontrado" });
    }

    return res.status(200).json(user);
  }
}

export { GetUserByIdController };
