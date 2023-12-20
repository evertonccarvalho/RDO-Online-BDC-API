import { Router } from 'express';
import { ensureAuth } from '../../middleware/userAuth';
import { DeleteController } from '../../modules/WORKS/services/services/useCases/delete/DeleteController';
import { GetAllController } from '../../modules/WORKS/services/services/useCases/getAll/GetAllController';
import { GetByIdController } from '../../modules/WORKS/services/services/useCases/getById/GetByIdController';

import { RegisterController } from '../../modules/WORKS/services/services/useCases/register/RegisterController';
import { UpdateController } from '../../modules/WORKS/services/services/useCases/update/UpdateController';
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
