import { IObra } from "../../../obras/infra/entities/Obra";

export interface IUserLogin {
  id?: number;
  usuario: string;
  email: string;
  password: string;
  ativo: boolean;
  role: string;
  idObra?: number | null;
  obra?: IObra[] | null;
  dataCriacao: Date;
}
