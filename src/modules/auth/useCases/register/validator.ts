import { Joi, Segments } from "celebrate";
import { customMessages } from "../../../../utils/erros";
// Importe a função customMessages

const registerValidator = {
  [Segments.BODY]: Joi.object().keys({
    usuario: Joi.string().required().min(3).max(50).messages(customMessages("usuario")), // Use a função customMessages
    email: Joi.string().required().min(3).max(50).messages(customMessages("email")), // Use a função customMessages
    senha: Joi.string().required().min(6).messages(customMessages("senha")), // Use a função customMessages
  }),
};

export { registerValidator };
