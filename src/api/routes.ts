import { Router } from 'express';
import { authRouter } from '../routes/auth.router';
import { userRoutes } from '../routes/user.router';
import { workRoutes } from '../routes/work.routes';

const router = Router();

// router.use(productRoutes);
router.use(workRoutes);
router.use(authRouter);
router.use(userRoutes);

export { router };
