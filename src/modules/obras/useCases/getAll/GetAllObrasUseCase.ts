import { inject, injectable } from "tsyringe";
import { IObra } from "../../infra/entities/Obra";
import { IObraRepository } from "../../infra/repositories/IObraRepository";

@injectable()
class GetAllObrasUseCase {
  constructor(
    @inject("ObraRepository")
    private productRepository: IObraRepository
  ) {}

  async execute(): Promise<IObra[]> {
    return this.productRepository.read();
  }
}

export { GetAllObrasUseCase };
