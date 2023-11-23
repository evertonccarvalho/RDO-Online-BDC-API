import { NextFunction, Request, Response } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import { IUser } from '../modules/users/interfaces/User';
import { UserRepository } from '../modules/users/repositories/UserRepository';
import { jwtService } from '../utils/jwt';

export interface AuthenticateRequest extends Request {
	user?: IUser | null;
}

export function ensureAuth(
	req: AuthenticateRequest,
	res: Response,
	next: NextFunction
) {
	const authorizationHeader = req.headers.authorization;

	if (!authorizationHeader)
		return res
			.status(401)
			.json({ message: 'Não atutorizado nenhum token foi encontrado.' });

	const token = authorizationHeader.replace(/Bearer /, '');
	/////////lembrar de colocar o espaço apos Bearer ^
	jwtService.verifyToken(token, async (err, decoded) => {
		if (err || typeof decoded === 'undefined') {
			return res
				.status(401)
				.json({ message: 'Não autorizado: token inválido' });
		}
		const userRepository = new UserRepository();
		const user = await userRepository.getByEmail((decoded as JwtPayload).email);
		req.user = user;
		next();
	});
}
