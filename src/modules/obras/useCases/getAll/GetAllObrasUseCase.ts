import { inject, injectable } from "tsyringe";
import { IObraDTO } from "../../infra/entities/Obra";
import { IObraRepository } from "../../infra/repositories/IObraRepository";

@injectable()
class GetAllObrasUseCase {
  constructor(
    @inject("ObraRepository")
    private productRepository: IObraRepository
  ) {}

  async execute(): Promise<IObraDTO[]> {
    return this.productRepository.read();
  }
}

export { GetAllObrasUseCase };
