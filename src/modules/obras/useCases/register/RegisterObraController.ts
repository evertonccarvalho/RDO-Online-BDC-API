import { Request, Response } from "express";
import { RegisterObraUseCase } from "./RegisterObraUseCase";
import { container } from "tsyringe";
import { IObra } from "../../infra/entities/Obra";

class RegisterObraController {
  async handle(req: Request, res: Response): Promise<Response> {
    const {
      descricaoObra,
      empresaObra,
      logo,
      enderecoCompleto,
      nomeResponsavel,
      telefoneContato,
      ativo,
      usuarios,
      obra,
      dataCriacao,
      id,
    }: IObra = req.body;

    const registerUseCase = container.resolve(RegisterObraUseCase);
    await registerUseCase.execute({
      descricaoObra,
      usuarios,
      empresaObra,
      obra,
      logo,
      enderecoCompleto,
      nomeResponsavel,
      telefoneContato,
      ativo,
      dataCriacao,
      id,
    });

    return res.status(201).json({ message: "Registro realizado com sucesso!" });
  }
}

export { RegisterObraController };
