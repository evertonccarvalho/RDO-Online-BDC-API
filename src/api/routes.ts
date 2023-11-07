import { Router } from "express";
import { productRoutes } from "../routes/product.routes";
import { categoryRoutes } from "../routes/category.routes";
import { authRouter } from "../routes/auth.router";
import { userRoutes } from "../routes/user.router";

const router = Router();

router.use(productRoutes);
router.use(categoryRoutes);
router.use(authRouter);
router.use(userRoutes);

export { router };
