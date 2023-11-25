import { Request, Response } from 'express';
import { ensureAuth } from './auth';

describe('ensureAuth', () => {
	let mockRequest: Partial<Request>;
	let mockResponse: Partial<Response>;
	let mockNextFunction: jest.Mock;

	beforeEach(() => {
		mockRequest = {
			headers: {},
		};
		mockResponse = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn(),
		};
		mockNextFunction = jest.fn();
	});

	it('should return 401 if no token is provided', async () => {
		await ensureAuth(
			mockRequest as Request,
			mockResponse as Response,
			mockNextFunction
		);
		expect(mockResponse.status).toHaveBeenCalledWith(401);
		expect(mockResponse.json).toHaveBeenCalledWith({
			message: 'Não autorizado: nenhum token foi encontrado.',
		});
		expect(mockNextFunction).not.toHaveBeenCalled();
	});

	it('should return 401 if an invalid token is provided', async () => {
		mockRequest.headers = { authorization: 'Bearer invalidToken' }; // Defina um token inválido

		await ensureAuth(
			mockRequest as Request,
			mockResponse as Response,
			mockNextFunction
		);
		expect(mockResponse.status).toHaveBeenCalledWith(401);
		expect(mockResponse.json).toHaveBeenCalledWith({
			message: 'Não autorizado: token inválido',
		});
		expect(mockNextFunction).not.toHaveBeenCalled();
	});

	// Adicione mais casos de teste conforme necessário (token válido, decodificação do payload, etc.)
});
