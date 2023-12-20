// import { celebrate } from 'celebrate';
import { Router } from 'express';
import { ensureAuth } from '../../middleware/userAuth';
import { DeleteController } from '../../modules/WORKS/location/useCases/delete/DeleteController';
import { GetAllController } from '../../modules/WORKS/location/useCases/getAll/GetAllController';
import { GetByIdController } from '../../modules/WORKS/location/useCases/getById/GetByIdController';

import { RegisterController } from '../../modules/WORKS/location/useCases/register/RegisterController';
import { UpdateController } from '../../modules/WORKS/location/useCases/update/UpdateController';

const locationRoutes = Router();

const registerController = new RegisterController();
const getAllController = new GetAllController();
const getByIdController = new GetByIdController();
const updateController = new UpdateController();
const deleteController = new DeleteController();

locationRoutes.post(
	'/works/:workid/location',
	ensureAuth,
	registerController.handle
);
locationRoutes.get(
	'/works/:workid/locations',
	ensureAuth,
	getAllController.handle
);

locationRoutes.get(
	'/works/:workid/location/:id',
	ensureAuth,
	getByIdController.handle
);

locationRoutes.put(
	'/works/:workid/location/:id',
	ensureAuth,
	updateController.handle
);
locationRoutes.delete(
	'/works/:workid/location/:id',
	ensureAuth,
	deleteController.handle
);

export { locationRoutes };
