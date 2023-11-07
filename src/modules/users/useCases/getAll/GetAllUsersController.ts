import { Request, Response } from "express";
import { GetAllUsersUseCase } from "./GetAllUsersUseCase";
import { container } from "tsyringe";

class GetAllUsersController {
  async handle(req: Request, res: Response): Promise<Response> {
    const getAllUsersUseCase = container.resolve(GetAllUsersUseCase);
    const users = await getAllUsersUseCase.execute();

    return res.status(200).json(users);
  }
}

export { GetAllUsersController };
