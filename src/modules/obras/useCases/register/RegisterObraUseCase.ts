import { inject, injectable } from "tsyringe";
import { IObra } from "../../infra/entities/Obra";
import { IObraRepository } from "../../infra/repositories/IObraRepository";

@injectable()
class RegisterObraUseCase {
  constructor(
    @inject("ObraRepository")
    private obraRepository: IObraRepository
  ) {}

  async execute({
    descricaoObra,
    empresaObra,
    logo,
    enderecoCompleto,
    nomeResponsavel,
    telefoneContato,
    ativo,
    obra,
    usuarios,
  }: IObra): Promise<void> {
    try {
      await this.obraRepository.register({
        descricaoObra,
        empresaObra,
        logo,
        enderecoCompleto,
        nomeResponsavel,
        telefoneContato,
        obra,
        usuarios,
        ativo,
        id: 0,
        dataCriacao: new Date(),
      });

      // Retornar um valor ou objeto indicando sucesso
      return; // ou um objeto { success: true } por exemplo
    } catch (error) {
      console.error("Erro ao registrar obra:", error);
      throw new Error("Erro ao registrar obra");
    }
  }
}

export { RegisterObraUseCase };
