export interface IUserDTO {
  id: string;
  email: string;
  password: string;
  name?: string;
  phone?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
