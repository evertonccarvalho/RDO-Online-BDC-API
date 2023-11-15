import { Url } from "url";
import { IObra } from "../../../obras/infra/entities/Obra";

export interface IUserLogin {
  id?: number;
  usuario: string;
  email: string;
  password: string;
  ativo: boolean;
  role: string;
  avatarUrl: string | null;
  idObra?: number | null;
  obra?: IObra[] | null;
  dataCriacao: Date;
}
