import { Router } from 'express';
import { ensureAuth } from '../middleware/userAuth';
import { showUser } from '../modules/profile/ShowUser';
import { UpdateUserController } from '../modules/profile/useCases/update/UpdateUserController';

const userRoutes = Router();

const updateUserController = new UpdateUserController();

userRoutes.put('/current/user/:id', ensureAuth, updateUserController.handle);
userRoutes.get('/current/user', ensureAuth, showUser.show);
export { userRoutes };
