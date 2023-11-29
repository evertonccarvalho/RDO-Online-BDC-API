import { Router } from 'express';
import { authRouter } from '../routes/auth.router';
import { userRoutes } from '../routes/user.router';
import { workRoutes } from '../routes/work.routes';
import homeController from '../utils/home.controller';

const router = Router();

router.use(workRoutes);
router.use(authRouter);
router.use(userRoutes);
router.get('/', homeController.index);
export { router };
