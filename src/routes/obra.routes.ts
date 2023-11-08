import { Router } from "express";
import { celebrate } from "celebrate";
import { ensureAuth } from "../middleware/auth";
import { RegisterObraController } from "../modules/obras/useCases/register/RegisterObraController";
import { GetAllObrasController } from "../modules/obras/useCases/getAll/GetAllObrasController";
import { GetObraByIdController } from "../modules/obras/useCases/getById/GetObraByIdController";
import { UpdateObraController } from "../modules/obras/useCases/update/UpdateObraController";
import { DeleteObraController } from "../modules/obras/useCases/delete/DeleteObraController";

import { registerValidator } from "../modules/obras/useCases/register/validator";
import { updateValidator } from "../modules/obras/useCases/update/validator";

const obraRoutes = Router();

const registerObraController = new RegisterObraController();
const getAllObrasController = new GetAllObrasController();
const getObraByIdController = new GetObraByIdController();
const updateObraController = new UpdateObraController();
const deleteObraController = new DeleteObraController();

obraRoutes.get("/obras", ensureAuth, getAllObrasController.handle);
obraRoutes.post("/obra", ensureAuth, celebrate(registerValidator), registerObraController.handle);
obraRoutes.get("/obra/:obraId", ensureAuth, getObraByIdController.handle);
obraRoutes.put("/obra/:obraId", ensureAuth, celebrate(updateValidator), updateObraController.handle);
obraRoutes.delete("/obra/:obraId", ensureAuth, deleteObraController.handle);

export { obraRoutes };
