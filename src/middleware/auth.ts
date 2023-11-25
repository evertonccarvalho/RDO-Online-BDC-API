import { NextFunction, Request, Response } from 'express';
import { IUser } from '../modules/users/interfaces/User';
import { UserRepository } from '../modules/users/repositories/UserRepository';
import { jwtService } from '../utils/jwt';

declare global {
	namespace Express {
		interface Request {
			user?: IUser;
		}
	}
}

export async function ensureAuth(
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
			return res
				.status(401)
				.json({ message: 'Não autorizado: token inválido' });
		}

		const userRepository = new UserRepository();
		const user = await userRepository.getByEmail(decoded.email as string);
		req.user = user !== null ? user : undefined; // Verifica se o usuário não é nulo
		next();
	} catch (error) {
		return res.status(401).json({ message: 'Não autorizado: token inválido' });
	}
}
