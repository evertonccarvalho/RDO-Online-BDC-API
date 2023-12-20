// import { celebrate } from 'celebrate';
import { Router } from 'express';
import { ensureAuth } from '../middleware/userAuth';

import { CreateWorkUserController } from '../modules/workUser/useCases/create/CreateWorkUserController ';
import { FindWorksByUserIdController } from '../modules/workUser/useCases/findByUserId/FindWorksByUserIdController ';
import { FindWorksByWorkIdController } from '../modules/workUser/useCases/findByWorkId/FindByWorkIdController ';
import { RemoveWorkUserController } from '../modules/workUser/useCases/remove/RemoveWorkUserController ';

const workUserRoutes = Router();

const createWorkUserController = new CreateWorkUserController();
const removeWorkUserController = new RemoveWorkUserController();
const findWorksByUserIdController = new FindWorksByUserIdController();
const findWorksByWorkIdController = new FindWorksByWorkIdController();

workUserRoutes.post('/workuser', ensureAuth, createWorkUserController.handle);
workUserRoutes.get(
	'/workuser/user/:userId',
	ensureAuth,
	findWorksByUserIdController.handle
);
workUserRoutes.get(
	'/workuser/work/:workId',
	ensureAuth,
	findWorksByWorkIdController.handle
);
workUserRoutes.delete('/workuser', ensureAuth, removeWorkUserController.handle);

export { workUserRoutes };
