import { Router } from 'express';
import { authRouter } from '../routes/auth.router';
import { userRoutes } from '../routes/user.router';
import { workRoutes } from '../routes/work.routes';

const router = Router();

router.use(userRoutes);
router.use(authRouter);
router.use(workRoutes);
export { router };
