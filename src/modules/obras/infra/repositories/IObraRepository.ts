import { IObraDTO } from "../entities/Obra";

interface IObraRepository {
  register(obra: IObraDTO): Promise<void>;
  getById(obraId: number): Promise<IObraDTO | null>;
  getByIdWithDetails(obraId: number): Promise<IObraDTO | null>;
  read(): Promise<IObraDTO[]>;
  update(obraId: number, updatedObraData: IObraDTO): Promise<void>;
  delete(pobraId: number): Promise<void>;
}

export { IObraRepository };
