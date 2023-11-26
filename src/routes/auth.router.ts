import { Router } from 'express';
import { UserLoginController } from '../modules/auth/useCases/login/UserLoginController';
import { usersController } from '../modules/users/UserShowController';

import { authMiddleware } from '../middleware/authMiddleware';
import { UserRegisterController } from '../modules/users/useCases/register/UserRegisterController';
import { ensureAuth } from '../middleware/auth';

const authRouter = Router();

const userLoginController = new UserLoginController();
const userRegisterController = new UserRegisterController();

authRouter.post(
	'/auth/login',
	// celebrate(loginValidator),
	userLoginController.handle
);
authRouter.post('/auth/register', userRegisterController.handle);
authRouter.get('/auth', ensureAuth, usersController.show);

export { authRouter };
