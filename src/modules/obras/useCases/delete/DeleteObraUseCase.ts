import { inject, injectable } from "tsyringe";
import { IObraRepository } from "../../infra/repositories/IObraRepository";

@injectable()
class DeleteObraUseCase {
  constructor(
    @inject("ObraRepository")
    private obraRepository: IObraRepository
  ) {}

  async execute(obraId: number): Promise<void> {
    const obra = await this.obraRepository.getById(obraId);

    if (!obra) {
      throw new Error("Obra não encontrado");
    }

    await this.obraRepository.delete(obraId);
  }
}

export { DeleteObraUseCase };
