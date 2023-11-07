import { Joi, Segments } from "celebrate";
import { customMessages } from "../../../../utils/erros";
// Importe a função customMessages

const updateValidator = {
  [Segments.BODY]: Joi.object().keys({
    usuario: Joi.string().required().min(3).max(50).messages(customMessages("name")), // Use a função customMessages
    email: Joi.string().required().min(3).max(50).messages(customMessages("email")), // Use a função customMessages
    role: Joi.string().required().min(3).max(50).messages(customMessages("função")), // Use a função customMessages
    ativo: Joi.boolean().messages(customMessages("ativo")), // Use a função customMessages
    idObra: Joi.number().required().min(1).max(50).messages(customMessages("idObra")), // Use a função customMessages
  }),
};

export { updateValidator };
