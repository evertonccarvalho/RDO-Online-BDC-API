import { NextFunction, Request, Response } from 'express';
import { IUser } from '../modules/users/interfaces/User';
import { UserRepository } from '../modules/users/repositories/UserRepository';
import { jwtService } from '../utils/jwt';

declare module 'express' {
	interface Request {
		user?: IUser; // Defina a propriedade 'user' e seu tipo aqui
	}
}

export async function ensureAdmin(
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
		const userRepository = new UserRepository();
		const user = await userRepository.getByEmail(decoded.email as string);

		if (!decoded || typeof decoded === 'undefined') {
			return res
				.status(401)
				.json({ message: 'Não autorizado: token inválido!' });
		}

		if (
			!user ||
			typeof user === 'undefined' ||
			!user.role ||
			(user.role !== 'Administrador' && user.role !== 'root')
		) {
			return res.status(403).json({
				message:
					'Acesso negado. Somente administradores podem acessar esta rota.',
			});
		}

		req.user = user;
		next();
	} catch (error) {
		console.error('Erro durante a verificação do token:', error);
		return res.status(401).json({ message: 'Não autorizado: token inválido!' });
	}
}
