import { container } from "tsyringe"; // Exemplo de um DI container
import { ProductRepository } from "../../modules/products/infra/repositories/productRepository";
import { IProductRepository } from "../../modules/products/infra/repositories/IProductRepository";
import { ICategoryRepository } from "../../modules/categorys/infra/repositories/ICategoryRepository";
import { CategoryRepository } from "../../modules/categorys/infra/repositories/CategoryRepository";
import { UserRepository } from "../../modules/users/infra/repositories/UserRepository";
import { IUserRepository } from "../../modules/users/infra/repositories/IUserRepository";
import { IUserAuthRepository } from "../../modules/auth/infra/repositories/IUserAuthRepository";
import { UserAuthRepository } from "../../modules/auth/infra/repositories/UserAuthRepository";

container.registerSingleton<IProductRepository>("ProductRepository", ProductRepository);
container.registerSingleton<ICategoryRepository>("CategoryRepository", CategoryRepository);
container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
container.registerSingleton<IUserAuthRepository>("UserAuthRepository", UserAuthRepository);
