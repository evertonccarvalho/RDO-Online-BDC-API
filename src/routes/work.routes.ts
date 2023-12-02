// import { celebrate } from 'celebrate';
import { Router } from 'express';
import { ensureAuth } from '../middleware/auth';
import { DeleteController } from '../modules/works/delete/useCases/DeleteController';
import { GetAllController } from '../modules/works/getAll/useCases/GetAllController';
import { GetByIdController } from '../modules/works/getById/useCases/GetByIdController';
import { RegisterController } from '../modules/works/register/useCases/RegisterController';
import { UpdateWorkController } from '../modules/works/update/useCases/UpdateWorkController';

const workRoutes = Router();

const registerWorkController = new RegisterController();

const getByIdController = new GetByIdController();
const updateWorkController = new UpdateWorkController();

const getAllController = new GetAllController();
const deleteController = new DeleteController();

workRoutes.get('/user/works', ensureAuth, getAllController.handle);
workRoutes.post('/user/work', ensureAuth, registerWorkController.handle);
workRoutes.put('/work/:id', ensureAuth, updateWorkController.handle);
workRoutes.get('/work/:id', ensureAuth, getByIdController.handle);
workRoutes.delete('/work/:id', ensureAuth, deleteController.handle);

export { workRoutes };
