import { container } from 'tsyringe';
import { IUserAuthRepository } from '../../modules/auth/repositories/IUserAuthRepository';
import { UserAuthRepository } from '../../modules/auth/repositories/UserAuthRepository.1';
import { IUserRepository } from '../../modules/users/repositories/IUserRepository';
import { UserRepository } from '../../modules/users/repositories/UserRepository';
import { DeleteRepository } from '../../modules/works/delete/repositories/DeleteRepository';
import { IDeleteRepository } from '../../modules/works/delete/repositories/IDeleteRepository';
import { GetAllRepository } from '../../modules/works/getAll/repositories/GetAllRepository';
import { IGetAllRepository } from '../../modules/works/getAll/repositories/IGetAllRepository';
import { GetByIdRepository } from '../../modules/works/getById/repositories/GetByIdRepository';
import { IGetByIdRepository } from '../../modules/works/getById/repositories/IGetByIdRepository';
import { RegisterRepository } from '../../modules/works/register/repositories/RegisterRepository';
import { IUpdateRepository } from '../../modules/works/update/repositories/IUpdateRepository';
import { UpdateRepository } from '../../modules/works/update/repositories/UpdateRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);

container.registerSingleton<IUserAuthRepository>(
	'UserAuthRepository',
	UserAuthRepository
);

container.registerSingleton<RegisterRepository>(
	'RegisterRepository',
	RegisterRepository
);

container.registerSingleton<IGetByIdRepository>(
	'GetByIdRepository',
	GetByIdRepository
);

container.registerSingleton<IGetAllRepository>(
	'GetAllRepository',
	GetAllRepository
);
container.registerSingleton<IUpdateRepository>(
	'UpdateRepository',
	UpdateRepository
);

container.registerSingleton<IDeleteRepository>(
	'DeleteRepository',
	DeleteRepository
);
