import { IUser } from "../../../users/infra/entities/User";

export interface IObra {
  id: number;
  descricaoObra: string;
  empresaObra: string;
  nomeResponsavel: string;
  telefoneContato: string;
  enderecoCompleto: string;
  logo: string;
  ativo: boolean;
  dataCriacao: Date;
}
