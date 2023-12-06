// import { celebrate } from 'celebrate';
import { Router } from 'express';
import { ensureAuth } from '../middleware/auth';
import { DeleteController } from '../modules/works/useCases/delete/DeleteController';
import { GetByIdController } from '../modules/works/useCases/getById/GetByIdController';

import { GetAllController } from '../modules/services/subServiceCategory/useCases/getAll/GetAllController';
import { RegisterController } from '../modules/services/subServiceCategory/useCases/register/RegisterController';
import { UpdateController } from '../modules/works/useCases/update/UpdateController';

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
// workRoutes.get('/work/:id', ensureAuth, getByIdController.handle);
// workRoutes.put('/work/:id', ensureAuth, updateController.handle);
// workRoutes.delete('/work/:id', ensureAuth, deleteController.handle);

export { subServiceCategoryRoutes };
