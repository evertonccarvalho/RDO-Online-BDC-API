import { Router } from 'express';
import { ensureAuth } from '../middleware/auth';
import { usersController } from '../modules/profile/UserShowController';
import { UpdateUserController } from '../modules/profile/useCases/update/UpdateUserController';

const userRoutes = Router();

const updateUserController = new UpdateUserController();

userRoutes.put('/current/user/:id', ensureAuth, updateUserController.handle);
userRoutes.get('/current/user', ensureAuth, usersController.show);
export { userRoutes };
