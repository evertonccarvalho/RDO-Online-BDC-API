// import { celebrate } from 'celebrate';
import { Router } from 'express';
import { ensureAuth } from '../../middleware/userAuth';
import { DeleteController } from '../../modules/WORKS/interference/useCases/delete/DeleteController';
import { GetAllController } from '../../modules/WORKS/interference/useCases/getAll/GetAllController';
import { GetByIdController } from '../../modules/WORKS/interference/useCases/getById/GetByIdController';

import { RegisterController } from '../../modules/WORKS/interference/useCases/register/RegisterController';
import { UpdateController } from '../../modules/WORKS/interference/useCases/update/UpdateController';

const interferenceRoutes = Router();

const registerController = new RegisterController();
const getAllController = new GetAllController();
const getByIdController = new GetByIdController();
const updateController = new UpdateController();
const deleteController = new DeleteController();

interferenceRoutes.post(
	'/works/:workid/interference',
	ensureAuth,
	registerController.handle
);
interferenceRoutes.get(
	'/works/:workid/interferences',
	ensureAuth,
	getAllController.handle
);

interferenceRoutes.get(
	'/works/:workid/interference/:id',
	ensureAuth,
	getByIdController.handle
);

interferenceRoutes.put(
	'/works/:workid/interference/:id',
	ensureAuth,
	updateController.handle
);
interferenceRoutes.delete(
	'/works/:workid/interference/:id',
	ensureAuth,
	deleteController.handle
);

export { interferenceRoutes };
