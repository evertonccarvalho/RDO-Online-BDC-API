import { container } from 'tsyringe';
import { IUserAuthRepository } from '../../modules/auth/infra/repositories/IUserAuthRepository';
import { UserAuthRepository } from '../../modules/auth/infra/repositories/UserAuthRepository.1';
import { IWorkRepository } from '../../modules/obras/infra/repositories/IWorkRepository';
import { ObraRepository } from '../../modules/obras/infra/repositories/WorkRepository';
import { IUserRepository } from '../../modules/users/infra/repositories/IUserRepository';
import { UserRepository } from '../../modules/users/infra/repositories/UserRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);

container.registerSingleton<IUserAuthRepository>(
	'UserAuthRepository',
	UserAuthRepository
);

container.registerSingleton<IWorkRepository>('ObraRepository', ObraRepository);
