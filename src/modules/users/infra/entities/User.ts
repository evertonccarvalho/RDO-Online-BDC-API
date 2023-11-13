import { IObra } from "../../../obras/infra/entities/Obra";

export interface IUser {
  id: number;
  idObra?: number | null;
  obra?: IObra[] | null;
  usuario: string;
  email: string;
  ativo: boolean;
  role: string;
  dataCriacao: Date;
}

export interface IRegisterUser {
  usuario: string;
  email: string;
  password: string;
  ativo?: boolean;
  idObra?: number | null;
  obra?: IObra | null;
  role: string;
}
