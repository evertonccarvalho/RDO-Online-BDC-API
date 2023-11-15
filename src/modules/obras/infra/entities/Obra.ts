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
  usuarios?: IUser[]; // Se você quiser representar a relação com usuários
  dataCriacao: Date;
}
