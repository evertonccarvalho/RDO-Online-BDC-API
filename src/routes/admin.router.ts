import { Router } from 'express';
import { ensureAdmin } from '../middleware/adminAuth';
import { DeleteUserController } from '../modules/users/useCases/delete/DeleteUserController';
import { GetAllUsersController } from '../modules/users/useCases/getAll/GetAllUsersController';
import { GetUserByIdController } from '../modules/users/useCases/getById/GetUserByIdController';
import { UpdateUserController } from '../modules/users/useCases/update/UpdateUserController';
import homeController from '../utils/home.controller';

const adminRoutes = Router();

const getAllUsersController = new GetAllUsersController();
const getUserByIdController = new GetUserByIdController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

adminRoutes.get('/admin/users', ensureAdmin, getAllUsersController.handle);
adminRoutes.get('/admin/user/:id', ensureAdmin, getUserByIdController.handle);
adminRoutes.put('/admin/user/:id', ensureAdmin, updateUserController.handle);
adminRoutes.delete('/admin/user/:id', ensureAdmin, deleteUserController.handle);

export { adminRoutes };
