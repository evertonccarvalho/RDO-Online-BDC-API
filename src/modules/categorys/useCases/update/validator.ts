import { Joi, Segments } from "celebrate";
import { customMessages } from "../../../../utils/erros";
// Importe a função customMessages

const updateValidator = {
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required().min(3).max(50).messages(customMessages("nome")), // Use a função customMessages
    slug: Joi.string().required().min(3).max(50).messages(customMessages("slug")), // Use a função customMessages
    imageUrl: Joi.string().min(1).messages(customMessages("imageUrl")), // Use a função customMessages
  }),
};

export { updateValidator };
