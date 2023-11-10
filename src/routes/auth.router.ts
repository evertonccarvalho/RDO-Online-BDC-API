import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import { UserLoginController } from "../modules/auth/useCases/login/UserLoginController";
import { usersController } from "../modules/users/UserShowController";

import { UserRegisterController } from "../modules/users/useCases/register/UserRegisterController";
import { loginValidator } from "../modules/auth/useCases/login/validator";
import { registerValidator } from "../modules/users/useCases/register/validator";
import { ensureAuth } from "../middleware/auth";

const authRouter = Router();

const userLoginController = new UserLoginController();
const userRegisterController = new UserRegisterController();

authRouter.post("/auth/login", celebrate(loginValidator), userLoginController.handle);
authRouter.post("/auth/register", celebrate(registerValidator), userRegisterController.handle);
authRouter.get("/auth", ensureAuth, usersController.show);

export { authRouter };
