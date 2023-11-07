import { Router } from "express";
import { celebrate } from "celebrate";

import { RegisterProductController } from "../modules/products/useCases/register/RegisterProductController";
import { GetAllProductsController } from "../modules/products/useCases/getAll/GetAllProductsController";
import { GetProductByIdController } from "../modules/products/useCases/getById/GetProductByIdController";
import { UpdateProductController } from "../modules/products/useCases/update/UpdateProductController";
import { DeleteProductController } from "../modules/products/useCases/delete/DeleteProductController";

import { registerValidator } from "../modules/products/useCases/register/validator";
import { updateValidator } from "../modules/products/useCases/update/validator";

const productRoutes = Router();

const registerProductController = new RegisterProductController();
const getAllProductsController = new GetAllProductsController();
const getProductByIdController = new GetProductByIdController();
const updateProductController = new UpdateProductController();
const deleteProductController = new DeleteProductController();

productRoutes.post("/product", celebrate(registerValidator), registerProductController.handle);
productRoutes.get("/products", getAllProductsController.handle);
productRoutes.get("/product/:productId", getProductByIdController.handle);
productRoutes.put("/product/:productId", celebrate(updateValidator), updateProductController.handle);
productRoutes.delete("/product/:productId", deleteProductController.handle);

export { productRoutes };
