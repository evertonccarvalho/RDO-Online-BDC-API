import { Router } from 'express';
import { authRouter } from '../routes/auth.router';
import { profileRoutes } from '../routes/profile.router';
import { usersRoutes } from '../routes/users.router';
import { workRoutes } from '../routes/work.routes';
import { workUserRoutes } from '../routes/workUser.routes';
import homeController from '../utils/home.controller';

const router = Router();
router.get('/', homeController.index);
router.use(profileRoutes);
router.use(authRouter);
router.use(workRoutes);
router.use(usersRoutes);
router.use(workUserRoutes);
export { router };
