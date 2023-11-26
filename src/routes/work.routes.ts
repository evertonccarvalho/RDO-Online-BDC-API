// import { celebrate } from 'celebrate';
import { Router } from 'express';
import { ensureAuth } from '../middleware/auth';
import { DeleteWorkController } from '../modules/works/useCases/delete/DeleteWorkController';
import { GetAllWorksController } from '../modules/works/useCases/getAll/GetAllWorksController';
import { GetWorkByIdController } from '../modules/works/useCases/getById/GetWorkByIdController';
import { RegisterWorkController } from '../modules/works/useCases/register/RegisterWorkController';
import { UpdateWorkController } from '../modules/works/useCases/update/UpdateWorkController';

const workRoutes = Router();

const registerWorkController = new RegisterWorkController();
const getAllWorksController = new GetAllWorksController();
const getWorkByIdController = new GetWorkByIdController();
const updateWorkController = new UpdateWorkController();
const deleteWorkController = new DeleteWorkController();

workRoutes.get('/works', getAllWorksController.handle);
workRoutes.post('/work', ensureAuth, registerWorkController.handle);
workRoutes.get('/work/:id', ensureAuth, getWorkByIdController.handle);
workRoutes.put('/work/:id', ensureAuth, updateWorkController.handle);
workRoutes.delete('/work/:id', ensureAuth, deleteWorkController.handle);

export { workRoutes };
