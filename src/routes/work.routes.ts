// import { celebrate } from 'celebrate';
import { Router } from 'express';
import { ensureAuth } from '../middleware/auth';
import { DeleteController } from '../modules/works/useCases/delete/DeleteController';
import { GetAllController } from '../modules/works/useCases/getAll/GetAllController';
import { GetByIdController } from '../modules/works/useCases/getById/GetByIdController';
import { RegisterController } from '../modules/works/useCases/register/RegisterController';
import { UpdateController } from '../modules/works/useCases/update/UpdateController';

const workRoutes = Router();

const registerController = new RegisterController();
const getAllController = new GetAllController();
const getByIdController = new GetByIdController();
const updateController = new UpdateController();
const deleteController = new DeleteController();

workRoutes.post('/user/work', ensureAuth, registerController.handle);
workRoutes.get('/user/works', ensureAuth, getAllController.handle);
workRoutes.get('/work/:id', ensureAuth, getByIdController.handle);
workRoutes.put('/work/:id', ensureAuth, updateController.handle);
workRoutes.delete('/work/:id', ensureAuth, deleteController.handle);

export { workRoutes };
