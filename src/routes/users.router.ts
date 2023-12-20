import { Router } from 'express';
import { ensureAdmin } from '../middleware/adminAuth';
import { DeleteUserController } from '../modules/users/useCases/delete/DeleteUserController';
import { GetAllUsersController } from '../modules/users/useCases/getAll/GetAllUsersController';
import { GetUserByIdController } from '../modules/users/useCases/getById/GetUserByIdController';
import { UpdateUserController } from '../modules/users/useCases/update/UpdateUserController';

const usersRoutes = Router();

const getAllUsersController = new GetAllUsersController();
const getUserByIdController = new GetUserByIdController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

usersRoutes.get('/admin/users', ensureAdmin, getAllUsersController.handle);
usersRoutes.get('/admin/user/:id', ensureAdmin, getUserByIdController.handle);
usersRoutes.put('/admin/user/:id', ensureAdmin, updateUserController.handle);
usersRoutes.delete('/admin/user/:id', ensureAdmin, deleteUserController.handle);

export { usersRoutes };
