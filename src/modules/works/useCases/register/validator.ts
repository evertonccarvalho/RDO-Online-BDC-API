import { Joi, Segments } from 'celebrate';
import { customMessages } from '../../../../utils/erros';
// Importe a função customMessages

const registerValidator = {
	[Segments.BODY]: Joi.object().keys({
		workDescription: Joi.string()
			.required()
			.min(3)
			.max(50)
			.messages(customMessages('descrição da obra')),
		company: Joi.string()
			.required()
			.min(3)
			.max(50)
			.messages(customMessages('empresa da obra')),
		logoUrl: Joi.string()
			.uri()
			.allow(null, '')
			.messages(customMessages('logotipo')),
		address: Joi.string()
			.required()
			.min(3)
			.max(100)
			.messages(customMessages('endereço completo')),
		nameResponsible: Joi.string()
			.required()
			.min(3)
			.max(50)
			.messages(customMessages('nome do responsável')),
		phoneContact: Joi.string()
			.required()
			.min(8)
			.max(20)
			.messages(customMessages('número de telefone de contato')),
		active: Joi.boolean().required().messages(customMessages('status ativo')),
	}),
};

export { registerValidator };
