import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";

import { GetAllUsersController } from "../modules/users/useCases/getAll/GetAllUsersController";
import { GetUserByIdController } from "../modules/users/useCases/getById/GetUserByIdController";
import { UpdateUserController } from "../modules/users/useCases/update/UpdateUserController";
import { DeleteUserController } from "../modules/users/useCases/delete/DeleteUserController";
import { updateValidator } from "../modules/users/useCases/update/validator";

const userRoutes = Router();

const getAllUsersController = new GetAllUsersController();
const getUserByIdController = new GetUserByIdController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

userRoutes.get("/users", getAllUsersController.handle);
userRoutes.get("/user/:userId", getUserByIdController.handle);
userRoutes.put("/user/:userId", celebrate(updateValidator), updateUserController.handle);
userRoutes.delete("/user/:userId", deleteUserController.handle);

export { userRoutes };
