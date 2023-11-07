import { Router } from "express";
import { authRouter } from "../routes/auth.router";
import { userRoutes } from "../routes/user.router";
import { obraRoutes } from "../routes/obra.routes";

const router = Router();

// router.use(productRoutes);
router.use(obraRoutes);
router.use(authRouter);
router.use(userRoutes);

export { router };
