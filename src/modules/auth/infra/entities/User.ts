export interface IUserDTO {
  id: number;
  usuario: string;
  email: string;
  senha: string;
  ativo?: boolean;
  idObra?: number | null; // Adicione esta propriedade
  role?: string;
  dataCriacao?: Date;
}
