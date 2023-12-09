// import { celebrate } from 'celebrate';
import { Router } from 'express';
import { ensureAuth } from '../middleware/userAuth';
import { DeleteController } from '../modules/services/serviceCategory/useCases/delete/DeleteController';
import { GetAllController } from '../modules/services/serviceCategory/useCases/getAll/GetAllController';
import { GetByIdController } from '../modules/services/serviceCategory/useCases/getById/GetByIdController';

import { RegisterController } from '../modules/services/serviceCategory/useCases/register/RegisterController';
import { UpdateController } from '../modules/services/serviceCategory/useCases/update/UpdateController';

const serviceCategoryRoutes = Router();

const registerController = new RegisterController();
const getAllController = new GetAllController();
const getByIdController = new GetByIdController();
const updateController = new UpdateController();
const deleteController = new DeleteController();

serviceCategoryRoutes.post('/category', ensureAuth, registerController.handle);

serviceCategoryRoutes.get('/category', ensureAuth, getAllController.handle);

serviceCategoryRoutes.get(
	'/category/:id',
	ensureAuth,
	getByIdController.handle
);

serviceCategoryRoutes.put('/category/:id', ensureAuth, updateController.handle);

serviceCategoryRoutes.delete(
	'/category/:id',
	ensureAuth,
	deleteController.handle
);

export { serviceCategoryRoutes };
