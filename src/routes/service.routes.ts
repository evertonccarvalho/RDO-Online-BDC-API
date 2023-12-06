// import { celebrate } from 'celebrate';
import { Router } from 'express';
import { ensureAuth } from '../middleware/auth';
import { DeleteController } from '../modules/services/services/useCases/delete/DeleteController';
import { GetAllController } from '../modules/services/services/useCases/getAll/GetAllController';
import { GetByIdController } from '../modules/services/services/useCases/getById/GetByIdController';

import { RegisterController } from '../modules/services/services/useCases/register/RegisterController';
import { UpdateController } from '../modules/services/services/useCases/update/UpdateController';
import { serviceCategoryRoutes } from './serviceCategory.routes';
import { subServiceCategoryRoutes } from './subServiceCategory.routes';

const serviceRoutes = Router();

const registerController = new RegisterController();
const getAllController = new GetAllController();
const getByIdController = new GetByIdController();
const updateController = new UpdateController();
const deleteController = new DeleteController();

serviceRoutes.post(
	'/works/:workid/services',
	ensureAuth,
	registerController.handle
);
serviceRoutes.get(
	'/works/:workid/services',
	ensureAuth,
	getAllController.handle
);
serviceRoutes.get(
	'/works/:workid/services/:id',
	ensureAuth,
	getByIdController.handle
);
serviceRoutes.put(
	'/works/:workid/services/:id',
	ensureAuth,
	updateController.handle
);
serviceRoutes.delete(
	'/works/:workid/services/:id',
	ensureAuth,
	deleteController.handle
);

serviceRoutes.use(serviceCategoryRoutes);
serviceRoutes.use(subServiceCategoryRoutes);
export { serviceRoutes };
