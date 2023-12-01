import { Router } from 'express';
import { UserLoginController } from '../modules/auth/useCases/login/UserLoginController';
import { UserRegisterController } from '../modules/users/useCases/register/UserRegisterController';

const authRouter = Router();

const userLoginController = new UserLoginController();
const userRegisterController = new UserRegisterController();

authRouter.post('/auth/login', userLoginController.handle);
authRouter.post('/auth/register', userRegisterController.handle);

export { authRouter };
