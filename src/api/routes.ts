import { Router } from 'express';
import { adminRoutes } from '../routes/admin.router';
import { authRouter } from '../routes/auth.router';
import { userRoutes } from '../routes/user.router';
import { workRoutes } from '../routes/work.routes';
import homeController from '../utils/home.controller';

const router = Router();
adminRoutes.get('/', homeController.index);
router.use(userRoutes);
router.use(authRouter);
router.use(workRoutes);
router.use(adminRoutes);
export { router };
