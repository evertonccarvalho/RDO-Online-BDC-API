export interface IUser {
  id: number;
  usuario: string;
  email: string;
  ativo?: boolean;
  idObra?: number | null;
  role?: string;
  dataCriacao?: Date;
}

export interface IRegisterUser {
  usuario: string;
  email: string;
  senha: string;
  ativo?: boolean;
  idObra?: number | null;
}
