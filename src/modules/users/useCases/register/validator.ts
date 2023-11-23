import { Joi, Segments } from 'celebrate';
import { customMessages } from '../../../../utils/erros';
// Importe a função customMessages

const registerValidator = {
	[Segments.BODY]: Joi.object().keys({
		userName: Joi.string()
			.required()
			.min(3)
			.max(50)
			.messages(customMessages('usuario')), // Use a função customMessages
		email: Joi.string()
			.required()
			.min(3)
			.max(50)
			.messages(customMessages('email')), // Use a função customMessages
		password: Joi.string()
			.required()
			.min(6)
			.messages(customMessages('password')), // Use a função customMessages
	}),
};

export { registerValidator };
