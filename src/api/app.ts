import "reflect-metadata";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { router } from "./routes";
import { celebrateError } from "../middleware/errors.middlewares";
import "./container";
class App {
  public server;

  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.server.use(celebrateError);
  }

  middlewares() {
    dotenv.config();
    this.server.use(cors());
    this.server.use(express.json());
  }
  routes() {
    this.server.use("/", router);
  }
}

export default new App().server;
