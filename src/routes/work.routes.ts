import { celebrate } from 'celebrate';
import { Router } from 'express';
import { ensureAuth } from '../middleware/auth';
import { DeleteWorkController } from '../modules/works/useCases/delete/DeleteWorkController';
import { GetAllWorksController } from '../modules/works/useCases/getAll/GetAllWorksController';
import { GetWorkByIdController } from '../modules/works/useCases/getById/GetWorkByIdController';
import { RegisterWorkController } from '../modules/works/useCases/register/RegisterWorkController';
import { UpdateWorkController } from '../modules/works/useCases/update/UpdateWorkController';

import { registerValidator } from '../modules/works/useCases/register/validator';
import { updateValidator } from '../modules/works/useCases/update/validator';

const workRoutes = Router();

const registerWorkController = new RegisterWorkController();
const getAllWorksController = new GetAllWorksController();
const getWorkByIdController = new GetWorkByIdController();
const updateWorkController = new UpdateWorkController();
const deleteWorkController = new DeleteWorkController();

workRoutes.get('/works', getAllWorksController.handle);
workRoutes.post(
	'/work',
	ensureAuth,
	celebrate(registerValidator),
	registerWorkController.handle
);
workRoutes.get('/work/:workId', ensureAuth, getWorkByIdController.handle);
workRoutes.put(
	'/work/:workId',
	ensureAuth,
	celebrate(updateValidator),
	updateWorkController.handle
);
workRoutes.delete('/work/:workId', ensureAuth, deleteWorkController.handle);

export { workRoutes };
