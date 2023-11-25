import { Joi, Segments } from 'celebrate';
import { customMessages } from '../../../../utils/erros';
// Importe a função customMessages

const updateValidator = {
	[Segments.BODY]: Joi.object().keys({
		userName: Joi.string()
			.required()
			.min(3)
			.max(50)
			.messages(customMessages('name')), // Use a função customMessages
		email: Joi.string().required().email().messages(customMessages('email')), // Use a função customMessages
		avatarUrl: Joi.string()
			.min(3)
			.max(500)
			.messages(customMessages('avatarUrl')), // Use a função customMessages
		role: Joi.string()
			.required()
			.min(3)
			.max(50)
			.messages(customMessages('função')), // Use a função customMessages
		active: Joi.boolean().messages(customMessages('ativo')), // Use a função customMessages
		workId: Joi.number()
			.required()
			.min(1)
			.max(50)
			.messages(customMessages('idObra')), // Use a função customMessages
	}),
};

export { updateValidator };
