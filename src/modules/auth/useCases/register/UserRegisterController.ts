import { Request, Response } from "express";
import { IUserDTO } from "../../infra/entities/User";
import { UserRegisterUseCase } from "./UserRegisterUseCase";
import { container } from "tsyringe";

class UserRegisterController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, password, phone }: IUserDTO = req.body;
    const userRegisterUseCase = container.resolve(UserRegisterUseCase);

    try {
      // const userAlreadyExist = await
      await userRegisterUseCase.execute({ name, email, password, phone });
      return res.status(201).json({ message: "Registro realizado com sucesso" });
    } catch (error) {
      return res.status(400).json({ message: "Erro no registro do usuário" });
    }
  }
}

export { UserRegisterController };
