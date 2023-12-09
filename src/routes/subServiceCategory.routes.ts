// import { celebrate } from 'celebrate';
import { Router } from 'express';
import { ensureAuth } from '../middleware/userAuth';

import { DeleteController } from '../modules/services/subServiceCategory/useCases/delete/DeleteController';
import { GetAllController } from '../modules/services/subServiceCategory/useCases/getAll/GetAllController';
import { GetByIdController } from '../modules/services/subServiceCategory/useCases/getById/GetByIdController';
import { RegisterController } from '../modules/services/subServiceCategory/useCases/register/RegisterController';
import { UpdateController } from '../modules/services/subServiceCategory/useCases/update/UpdateController';

const subServiceCategoryRoutes = Router();

const registerController = new RegisterController();
const getAllController = new GetAllController();
const getByIdController = new GetByIdController();
const updateController = new UpdateController();
const deleteController = new DeleteController();

subServiceCategoryRoutes.post(
	'/subcategory',
	ensureAuth,
	registerController.handle
);
subServiceCategoryRoutes.get(
	'/subcategory',
	ensureAuth,
	getAllController.handle
);
subServiceCategoryRoutes.get(
	'/subcategory/:id',
	ensureAuth,
	getByIdController.handle
);
subServiceCategoryRoutes.put(
	'/subcategory/:id',
	ensureAuth,
	updateController.handle
);
subServiceCategoryRoutes.delete(
	'/subcategory/:id',
	ensureAuth,
	deleteController.handle
);

export { subServiceCategoryRoutes };
