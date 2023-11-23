import { container } from 'tsyringe';
import { IUserAuthRepository } from '../../modules/auth/repositories/IUserAuthRepository';
import { UserAuthRepository } from '../../modules/auth/repositories/UserAuthRepository.1';
import { IUserRepository } from '../../modules/users/repositories/IUserRepository';
import { UserRepository } from '../../modules/users/repositories/UserRepository';
import { IWorkRepository } from '../../modules/works/repositories/IWorkRepository';
import { WorkRepository } from '../../modules/works/repositories/WorkRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);

container.registerSingleton<IUserAuthRepository>(
	'UserAuthRepository',
	UserAuthRepository
);

container.registerSingleton<IWorkRepository>('WorkRepository', WorkRepository);
