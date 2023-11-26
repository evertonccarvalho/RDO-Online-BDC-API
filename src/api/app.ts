import cors from 'cors';
import express from 'express';
import 'reflect-metadata';
import { errorMiddleware } from '../middleware/errors.middlewares';
import './container';
import { router } from './routes';

class App {
	public server;

	constructor() {
		this.server = express(); // Crie a instância do Express primeiro
		this.server.use(errorMiddleware); // Adicione o middleware de Erros
		this.middlewares(); // Configure os middlewares
		this.routes(); // Configure as rotas
	}

	middlewares() {
		this.server.use(cors());
		this.server.use(express.json());
	}

	routes() {
		this.server.use('/', router);
	}
}

export default new App().server;
