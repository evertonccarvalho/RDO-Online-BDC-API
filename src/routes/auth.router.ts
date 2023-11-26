import { Router } from 'express';
import { ensureAuth } from '../middleware/auth';
import { UserLoginController } from '../modules/auth/useCases/login/UserLoginController';
import { usersController } from '../modules/users/UserShowController';
import { UserRegisterController } from '../modules/users/useCases/register/UserRegisterController';

const authRouter = Router();

const userLoginController = new UserLoginController();
const userRegisterController = new UserRegisterController();

authRouter.post('/auth/login', userLoginController.handle);
authRouter.post('/auth/register', userRegisterController.handle);
authRouter.get('/auth', ensureAuth, usersController.show);

export { authRouter };
