// import { celebrate } from 'celebrate';
import { Router } from 'express';
import { ensureAuth } from '../middleware/auth';
import { DeleteController } from '../modules/effective/useCases/delete/DeleteController';
import { GetAllController } from '../modules/effective/useCases/getAll/GetAllController';
import { GetByIdController } from '../modules/effective/useCases/getById/GetByIdController';

import { RegisterController } from '../modules/effective/useCases/register/RegisterController';
import { UpdateController } from '../modules/effective/useCases/update/UpdateController';

const effectiveRoutes = Router();

const registerController = new RegisterController();
const getAllController = new GetAllController();
const getByIdController = new GetByIdController();
const updateController = new UpdateController();
const deleteController = new DeleteController();

effectiveRoutes.post(
	'/works/:workid/effective',
	ensureAuth,
	registerController.handle
);
effectiveRoutes.get(
	'/works/:workid/effectives',
	ensureAuth,
	getAllController.handle
);

effectiveRoutes.get(
	'/works/:workid/effective/:id',
	ensureAuth,
	getByIdController.handle
);

effectiveRoutes.put(
	'/works/:workid/effective/:id',
	ensureAuth,
	updateController.handle
);
effectiveRoutes.delete(
	'/works/:workid/effective/:id',
	ensureAuth,
	deleteController.handle
);

export { effectiveRoutes };
