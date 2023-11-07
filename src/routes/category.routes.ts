import { Router } from "express";
import { celebrate } from "celebrate";

import { RegisterCategoryController } from "../modules/categorys/useCases/register/RegisterCategoryController";
import { GetAllCategorysController } from "../modules/categorys/useCases/getAll/GetAllCategorysController";
import { GetCategoryByIdController } from "../modules/categorys/useCases/getById/GetCategoryByIdController";
import { UpdateCategoryController } from "../modules/categorys/useCases/update/UpdateCategoryController";
import { DeleteCategoryController } from "../modules/categorys/useCases/delete/DeleteCategoryController";

import { registerValidator } from "../modules/categorys/useCases/register/validator";
import { updateValidator } from "../modules/categorys/useCases/update/validator";

const categoryRoutes = Router();

const registerCategoryController = new RegisterCategoryController();
const getAllCategorysController = new GetAllCategorysController();
const getCategoryByIdController = new GetCategoryByIdController();
const updateCategoryController = new UpdateCategoryController();
const deleteCategoryController = new DeleteCategoryController();

categoryRoutes.post("/category", celebrate(registerValidator), registerCategoryController.handle);
categoryRoutes.get("/categorys", getAllCategorysController.handle);
categoryRoutes.get("/category/:categoryId", getCategoryByIdController.handle);
categoryRoutes.put("/category/:categoryId", celebrate(updateValidator), updateCategoryController.handle);
categoryRoutes.delete("/category/:categoryId", deleteCategoryController.handle);

export { categoryRoutes };
