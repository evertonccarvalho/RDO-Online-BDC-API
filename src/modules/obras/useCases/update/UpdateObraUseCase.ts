import { inject, injectable } from "tsyringe";
import { IObraDTO } from "../../infra/entities/Obra";
import { IObraRepository } from "../../infra/repositories/IObraRepository";

@injectable()
class UpdateObraUseCase {
  constructor(
    @inject("ObraRepository")
    private obraRepository: IObraRepository
  ) {}

  async execute(obraId: number, updatedObraData: IObraDTO): Promise<void> {
    const obra = await this.obraRepository.getById(obraId);

    if (!obra) {
      throw new Error("Obra não encontrado");
    }

    await this.obraRepository.update(obraId, updatedObraData);
  }
}

export { UpdateObraUseCase };
