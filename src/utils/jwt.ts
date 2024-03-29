import jwt, { JwtPayload } from 'jsonwebtoken';
import { JWT_KEY } from '../api/config/environment';

export const jwtService = {
	signToken: (payload: string | object | Buffer, expiration: string) => {
		return jwt.sign(payload, JWT_KEY, {
			expiresIn: expiration,
		});
	},

	verifyToken: (token: string): Promise<JwtPayload> => {
		return new Promise((resolve, reject) => {
			const decoded = jwt.verify(token, JWT_KEY);
			resolve(decoded as JwtPayload);
		});
	},
};
