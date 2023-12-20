import { Router } from 'express';
import { ensureAuth } from '../middleware/userAuth';
import { showUser } from '../modules/profile/ShowUser';
import { UpdateUserController } from '../modules/profile/useCases/update/UpdateUserController';

const profileRoutes = Router();

const updateUserController = new UpdateUserController();

profileRoutes.put('/current/user/:id', ensureAuth, updateUserController.handle);
profileRoutes.get('/current/user', ensureAuth, showUser.show);
export { profileRoutes };
