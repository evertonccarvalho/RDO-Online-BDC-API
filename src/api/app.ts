import "reflect-metadata";
import "./container";
import cors from "cors";
import express from "express";
import { celebrateError } from "../middleware/errors.middlewares";
import { router } from "./routes";

class App {
  public server;

  constructor() {
    this.server = express(); // Crie a instância do Express primeiro
    this.server.use(celebrateError); // Adicione o middleware celebrateError
    this.middlewares(); // Configure os middlewares
    this.routes(); // Configure as rotas
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
  }

  routes() {
    this.server.use("/", router);
  }
}

export default new App().server;
