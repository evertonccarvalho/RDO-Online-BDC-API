import { Joi, Segments } from "celebrate";
import { customMessages } from "../../../../utils/erros";
// Importe a função customMessages

const updateValidator = {
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required().min(3).max(50).messages(customMessages("name")), // Use a função customMessages
    email: Joi.string().required().min(3).max(50).messages(customMessages("email")), // Use a função customMessages
    password: Joi.string().required().min(6).messages(customMessages("password")), // Use a função customMessages
    phone: Joi.string().min(8).messages(customMessages("phone")),
  }),
};

export { updateValidator };
