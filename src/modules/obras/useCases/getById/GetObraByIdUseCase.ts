import { inject, injectable } from "tsyringe";
import { IObra } from "../../infra/entities/Obra";
import { IObraRepository } from "../../infra/repositories/IObraRepository";

@injectable()
class GetObraByIdUseCase {
  constructor(
    @inject("ObraRepository")
    private obraRepository: IObraRepository
  ) {}

  async execute(obraId: number): Promise<IObra | null> {
    return this.obraRepository.getByIdWithDetails(obraId);
  }
}

export { GetObraByIdUseCase };
