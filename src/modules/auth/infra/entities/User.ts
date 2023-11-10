import { IObra } from "../../../obras/infra/entities/Obra";

export interface IUserLogin {
  id?: number;
  email: string;
  password: string;
  usuario?: string;
  role?: string;
  idObra: number;
  ativo: boolean;
  obra: IObra[];
}
