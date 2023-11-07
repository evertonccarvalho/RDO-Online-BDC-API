import { Joi, Segments } from "celebrate";
import { customMessages } from "../../../../utils/erros";
// Importe a função customMessages

const loginValidator = {
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().required().min(3).max(50).messages(customMessages("email")), // Use a função customMessages
    password: Joi.string().required().min(6).messages(customMessages("password")), // Us
  }),
};

export { loginValidator };
