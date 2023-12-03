import { Request, Response } from 'express';

export const showUser = {
	show: async (req: Request, res: Response) => {
		try {
			const currentUser = req.user;
			if (!currentUser) {
				console.log('No user information found in the request.');
				return res
					.status(400)
					.json({ message: 'User information not available.' });
			}
			return res.json(currentUser);
		} catch (err) {
			if (err instanceof Error) {
				return res.status(400).json({ message: err.message });
			}
			return res.status(500).json({ message: 'Internal server error.' });
		}
	},
};
