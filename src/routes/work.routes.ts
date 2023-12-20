// import { celebrate } from 'celebrate';
import { Router } from 'express';
import { ensureAuth } from '../middleware/userAuth';
import { DeleteController } from '../modules/WORKS/works/useCases/delete/DeleteController';
import { GetAllController } from '../modules/WORKS/works/useCases/getAll/GetAllController';
import { GetByIdController } from '../modules/WORKS/works/useCases/getById/GetByIdController';
import { RegisterController } from '../modules/WORKS/works/useCases/register/RegisterController';
import { UpdateController } from '../modules/WORKS/works/useCases/update/UpdateController';
import { effectiveRoutes } from './WORKS/effective.routes';
import { interferenceRoutes } from './WORKS/interference.routes';
import { locationRoutes } from './WORKS/location.routes';
import { serviceRoutes } from './WORKS/service.routes';
import { shiftRoutes } from './WORKS/shift.routes';
import { teamRoutes } from './WORKS/team.routes';

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

workRoutes.use(serviceRoutes);
workRoutes.use(teamRoutes);
workRoutes.use(shiftRoutes);
workRoutes.use(interferenceRoutes);
workRoutes.use(locationRoutes);
workRoutes.use(effectiveRoutes);
export { workRoutes };
