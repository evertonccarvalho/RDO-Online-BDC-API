import { container } from "tsyringe";
import { UserRepository } from "../../modules/users/infra/repositories/UserRepository";
import { IUserRepository } from "../../modules/users/infra/repositories/IUserRepository";
import { IUserAuthRepository } from "../../modules/auth/infra/repositories/IUserAuthRepository";
import { UserAuthRepository } from "../../modules/auth/infra/repositories/UserAuthRepository.1";
import { IObraRepository } from "../../modules/obras/infra/repositories/IObraRepository";
import { ObraRepository } from "../../modules/obras/infra/repositories/ObraRepository";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);

container.registerSingleton<IUserAuthRepository>("UserAuthRepository", UserAuthRepository);

container.registerSingleton<IObraRepository>("ObraRepository", ObraRepository);
