import { Obra } from "@prisma/client";
import { IObra } from "../../../obras/infra/entities/Obra";

export interface IUser {
  id: number;
  usuario: string;
  email: string;
  ativo?: boolean;
  idObra?: number | null;
  role?: string;
  dataCriacao?: Date;
  // obra?: IObra[];
}

export interface IRegisterUser {
  usuario: string;
  email: string;
  password: string;
  ativo?: boolean;
  idObra?: number | null;
}
