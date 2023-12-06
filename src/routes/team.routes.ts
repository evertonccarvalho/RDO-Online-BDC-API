// import { celebrate } from 'celebrate';
import { Router } from 'express';
import { ensureAuth } from '../middleware/auth';
import { DeleteController } from '../modules/team/useCases/delete/DeleteController';
import { GetAllController } from '../modules/team/useCases/getAll/GetAllController';
import { GetByIdController } from '../modules/team/useCases/getById/GetByIdController';

import { RegisterController } from '../modules/team/useCases/register/RegisterController';
import { UpdateController } from '../modules/team/useCases/update/UpdateController';

const teamRoutes = Router();

const registerController = new RegisterController();
const getAllController = new GetAllController();
const getByIdController = new GetByIdController();
const updateController = new UpdateController();
const deleteController = new DeleteController();

teamRoutes.post('/works/:workid/team', ensureAuth, registerController.handle);
teamRoutes.get('/works/:workid/teams', ensureAuth, getAllController.handle);
teamRoutes.get('/works/:workid/team/:id', ensureAuth, getByIdController.handle);
teamRoutes.put('/works/:workid/team/:id', ensureAuth, updateController.handle);
teamRoutes.delete(
	'/works/:workid/team/:id',
	ensureAuth,
	deleteController.handle
);

export { teamRoutes };
