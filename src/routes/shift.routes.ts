// import { celebrate } from 'celebrate';
import { Router } from 'express';
import { ensureAuth } from '../middleware/auth';
import { DeleteController } from '../modules/shift/useCases/delete/DeleteController';
import { GetAllController } from '../modules/shift/useCases/getAll/GetAllController';
import { GetByIdController } from '../modules/shift/useCases/getById/GetByIdController';

import { RegisterController } from '../modules/shift/useCases/register/RegisterController';
import { UpdateController } from '../modules/shift/useCases/update/UpdateController';

const shiftRoutes = Router();

const registerController = new RegisterController();
const getAllController = new GetAllController();
const getByIdController = new GetByIdController();
const updateController = new UpdateController();
const deleteController = new DeleteController();

shiftRoutes.post('/works/:workid/shift', ensureAuth, registerController.handle);
shiftRoutes.get('/works/:workid/shifts', ensureAuth, getAllController.handle);

shiftRoutes.get(
	'/works/:workid/shift/:id',
	ensureAuth,
	getByIdController.handle
);

shiftRoutes.put(
	'/works/:workid/shift/:id',
	ensureAuth,
	updateController.handle
);
shiftRoutes.delete(
	'/works/:workid/shift/:id',
	ensureAuth,
	deleteController.handle
);

export { shiftRoutes };
