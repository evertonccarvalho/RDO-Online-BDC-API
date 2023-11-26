import { NextFunction, Request, Response } from 'express';
import { UnauthorizedError } from '../helpers/api-erros';
import { IUserLogin } from '../modules/auth/interfaces/user-login';
import { UserAuthRepository } from '../modules/auth/repositories/UserAuthRepository.1';
import { jwtService } from '../utils/jwt';

declare global {
	namespace Express {
		interface Request {
			userAuth?: IUserLogin; // Substitua 'User' pelo tipo que representa os dados do usuário
		}
	}
}

export async function authMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const authorizationHeader = req.headers.authorization;

	if (!authorizationHeader) {
		return res
			.status(401)
			.json({ message: 'Não autorizado: nenhum token foi encontrado.' });
	}

	const token = authorizationHeader.replace(/Bearer /, '');

	try {
		const decoded = await jwtService.verifyToken(token);

		if (!decoded || typeof decoded === 'undefined') {
			throw new UnauthorizedError('Não autorizado');
		}

		const userAuthRepository = new UserAuthRepository();
		const user = await userAuthRepository.getById(decoded.id);

		if (!user) {
			throw new UnauthorizedError('Não autorizado');
		}

		req.userAuth = user; // Adiciona o objeto do usuário à requisição
		next(); // Chama o próximo middleware ou manipulador de rota
	} catch (error) {
		return res.status(401).json({ message: 'Não autorizado: token inválido' });
	}
}
