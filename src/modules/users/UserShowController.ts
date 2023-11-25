import { Request, Response } from 'express';

export const usersController = {
	// GET /users/current
	show: async (req: Request, res: Response) => {
		try {
			console.log('Request received in show endpoint:', req);

			const currentUser = req.user;
			console.log(currentUser);
			if (!currentUser) {
				console.log('No user information found in the request.');
				return res
					.status(400)
					.json({ message: 'User information not available.' });
			}

			console.log('Current user:', currentUser);

			return res.json(currentUser);
		} catch (err) {
			console.error('Error in usersController.show:', err);

			if (err instanceof Error) {
				return res.status(400).json({ message: err.message });
			}

			return res.status(500).json({ message: 'Internal server error.' });
		}
	},
};
