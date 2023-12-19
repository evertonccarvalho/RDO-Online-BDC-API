import { Request, Response } from 'express';
import { ShowUser } from '../users/interfaces/IUser';

export const showUser = {
	show: async (req: Request, res: Response) => {
		try {
			const currentUser: ShowUser | undefined = req.user;
			if (!currentUser) {
				console.log('No user information found in the request.');
				return res
					.status(400)
					.json({ message: 'User information not available.' });
			}

			const { id, userName, email, active, role, avatarUrl, works }: ShowUser =
				currentUser;

			const userInformation = {
				id,
				userName,
				email,
				avatarUrl,
				active,
				role,
				works,
			};

			return res.json(userInformation);
		} catch (err) {
			if (err instanceof Error) {
				return res.status(400).json({ message: err.message });
			}
			return res.status(500).json({ message: 'Internal server error.' });
		}
	},
};
