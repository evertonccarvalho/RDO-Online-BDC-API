import cors from 'cors';
import express from 'express';
import 'reflect-metadata';
import { errorMiddleware } from '../middleware/errors.middlewares';
import './container';
import { router } from './routes';

export class App {
	public server!: express.Application;

	public constructor() {
		this.server = express(); // Crie a instância do Express primeiro
		this.initialize();
	}

	protected initialize() {
		this.server = express();
		this.server.use(cors());
		this.server.use(express.json());
		this.server.use(errorMiddleware); // Adicione o middleware de Erros
		this.server.use('/api/', router);
	}
}

export default new App().server;
