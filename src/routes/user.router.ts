import { Router } from 'express';

// import { ensureAdmin } from '../middleware/adminAuth';
import { ensureAdmin } from '../middleware/adminAuth';
import { ensureAuth } from '../middleware/auth';
import { DeleteUserController } from '../modules/users/useCases/delete/DeleteUserController';
import { GetAllUsersController } from '../modules/users/useCases/getAll/GetAllUsersController';
import { GetUserByIdController } from '../modules/users/useCases/getById/GetUserByIdController';
import { UpdateUserController } from '../modules/users/useCases/update/UpdateUserController';

const userRoutes = Router();

const getAllUsersController = new GetAllUsersController();
const getUserByIdController = new GetUserByIdController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

userRoutes.get('/users', ensureAdmin, getAllUsersController.handle);
userRoutes.get('/user/:id', ensureAdmin, getUserByIdController.handle);
userRoutes.put('/user/:id', ensureAuth, updateUserController.handle);
userRoutes.delete('/user/:id', ensureAdmin, deleteUserController.handle);

export { userRoutes };
