import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import { UserLoginController } from "../modules/auth/useCases/login/UserLoginController";
import { UserRegisterController } from "../modules/auth/useCases/register/UserRegisterController";

import { loginValidator } from "../modules/auth/useCases/login/validator";
import { registerValidator } from "../modules/auth/useCases/register/validator";

const authRouter = Router();

const userLoginController = new UserLoginController();
const userRegisterController = new UserRegisterController();

authRouter.post("/auth/login", celebrate(loginValidator), userLoginController.handle);
authRouter.post("/auth/register", celebrate(registerValidator), userRegisterController.handle);

export { authRouter };
