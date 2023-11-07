import { Request, Response } from "express";
import { IObraDTO } from "../../infra/entities/Obra";
import { RegisterObraUseCase } from "./RegisterObraUseCase";
import { container } from "tsyringe";

class RegisterObraController {
  async handle(req: Request, res: Response): Promise<Response> {
    const {
      id,
      descricaoObra,
      empresaObra,
      logo,
      enderecoCompleto,
      nomeResponsavel,
      telefoneContato,
      ativo,
    }: IObraDTO = req.body;
    const registerUseCase = container.resolve(RegisterObraUseCase);
    await registerUseCase.execute({
      id,
      descricaoObra,
      empresaObra,
      logo,
      enderecoCompleto,
      nomeResponsavel,
      telefoneContato,
      ativo,
    });

    return res.status(201).json({ message: "Registro realizado com sucesso!" });
  }
}

export { RegisterObraController };
