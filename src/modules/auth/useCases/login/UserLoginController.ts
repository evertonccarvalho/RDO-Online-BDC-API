import { Request, Response } from "express";
import { UserLoginUseCase } from "./UserLoginUseCase";
import { container } from "tsyringe";

class UserLoginController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    const userLoginUseCase = container.resolve(UserLoginUseCase);

    try {
      const user = await userLoginUseCase.execute(email, password);

      if (!user) {
        return res.status(401).json({ message: "Credenciais inválidas" });
      }

      return res.status(200).json({ user });
    } catch (error) {
      console.error("Erro de autenticação:", error);
      return res.status(500).json({ message: "Erro de autenticação" });
    }
  }
}

export { UserLoginController };
