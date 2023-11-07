export interface IUserDTO {
  id: number;
  usuario: string;
  email: string;
  senha: string;
  ativo?: boolean;
  idObra?: number | null;
  role?: string;
  dataCriacao?: Date;
}
