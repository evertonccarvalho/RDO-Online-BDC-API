import { inject, injectable } from "tsyringe";
import { IObraDTO } from "../../infra/entities/Obra";
import { IObraRepository } from "../../infra/repositories/IObraRepository";

@injectable()
class GetObraByIdUseCase {
  constructor(
    @inject("ObraRepository")
    private obraRepository: IObraRepository
  ) {}

  async execute(obraId: number): Promise<IObraDTO | null> {
    return this.obraRepository.getByIdWithDetails(obraId);
  }
}

export { GetObraByIdUseCase };
