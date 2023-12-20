// import { celebrate } from 'celebrate';
import { Router } from 'express';
import { ensureAuth } from '../../middleware/userAuth';
import { DeleteController } from '../../modules/WORKS/shift/useCases/delete/DeleteController';
import { GetAllController } from '../../modules/WORKS/shift/useCases/getAll/GetAllController';
import { GetByIdController } from '../../modules/WORKS/shift/useCases/getById/GetByIdController';

import { RegisterController } from '../../modules/WORKS/shift/useCases/register/RegisterController';
import { UpdateController } from '../../modules/WORKS/shift/useCases/update/UpdateController';

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
