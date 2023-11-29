import cors from 'cors';
import express, { Application } from 'express';
import 'reflect-metadata';
import { errorMiddleware } from '../middleware/errors.middlewares';
import './container';
import { router } from './routes';
class App {
	public server: Application;

	constructor() {
		this.server = express(); // Crie a instância do Express primeiro
		this.setup();
	}

	setup() {
		this.server.use(cors());
		this.server.use(express.json());
		this.server.use(errorMiddleware); // Adicione o middleware de Erros
		this.server.use(`/`, router);
	}
}

export default new App().server;
