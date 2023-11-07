import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

class UpdateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { userId } = req.params;
    const updatedUserData = req.body;
    const updateUserUseCase = container.resolve(UpdateUserUseCase);

    try {
      await updateUserUseCase.execute(+userId, updatedUserData);
      return res.status(200).json({ message: "Usuário atualizado com sucesso" });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }

      return res.status(500).json({ message: "Erro interno do servidor" });
    }
  }
}

export { UpdateUserController };
