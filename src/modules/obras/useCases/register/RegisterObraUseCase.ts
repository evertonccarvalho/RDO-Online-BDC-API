import { inject, injectable } from "tsyringe";
import { IObraDTO } from "../../infra/entities/Obra";
import { IObraRepository } from "../../infra/repositories/IObraRepository";

@injectable()
class RegisterObraUseCase {
  constructor(
    @inject("ObraRepository")
    private ObraRepository: IObraRepository
  ) {}
  async execute({
    id,
    descricaoObra,
    empresaObra,
    logo,
    enderecoCompleto,
    nomeResponsavel,
    telefoneContato,
    ativo,
  }: IObraDTO): Promise<void> {
    await this.ObraRepository.register({
      id,
      descricaoObra,
      empresaObra,
      logo,
      enderecoCompleto,
      nomeResponsavel,
      telefoneContato,
      ativo,
    });
  }
}

export { RegisterObraUseCase };
