// import { celebrate } from 'celebrate';
import { Router } from 'express';
import { ensureAuth } from '../middleware/auth';
import { DeleteController } from '../modules/works/delete/useCases/DeleteController';
import { GetAllController } from '../modules/works/getAll/useCases/GetAllController';
import { GetByIdController } from '../modules/works/getById/useCases/GetByIdController';
import { RegisterController } from '../modules/works/register/useCases/RegisterController';
import { UpdateController } from '../modules/works/update/useCases/UpdateController';

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
