import { IObra } from "../entities/Obra";

interface IObraRepository {
  register(obra: IObra): Promise<void>;
  getById(obraId: number): Promise<IObra | null>;
  getByIdWithDetails(obraId: number): Promise<IObra | null>;
  read(): Promise<IObra[]>;
  update(obraId: number, updatedObraData: IObra): Promise<void>;
  delete(pobraId: number): Promise<void>;
}

export { IObraRepository };
