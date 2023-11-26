import { celebrate } from 'celebrate';
import { Router } from 'express';
import { UserLoginController } from '../modules/auth/useCases/login/UserLoginController';
import { usersController } from '../modules/users/UserShowController';

import { ensureAuth } from '../middleware/auth';
import { loginValidator } from '../modules/auth/useCases/login/validator';
import { UserRegisterController } from '../modules/users/useCases/register/UserRegisterController';

const authRouter = Router();

const userLoginController = new UserLoginController();
const userRegisterController = new UserRegisterController();

authRouter.post(
	'/auth/login',
	celebrate(loginValidator),
	userLoginController.handle
);
authRouter.post('/auth/register', userRegisterController.handle);
authRouter.get('/auth', ensureAuth, usersController.show);

export { authRouter };
