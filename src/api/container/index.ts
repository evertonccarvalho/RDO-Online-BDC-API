import { container } from 'tsyringe';
import { IUserAuthRepository } from '../../modules/auth/repositories/IUserAuthRepository';
import { UserAuthRepository } from '../../modules/auth/repositories/UserAuthRepository.1';
import { IUserRepository } from '../../modules/users/repositories/IUserRepository';
import { UserRepository } from '../../modules/users/repositories/UserRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
