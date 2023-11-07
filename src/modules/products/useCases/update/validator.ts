import { Joi, Segments } from "celebrate";
import { customMessages } from "../../../../utils/erros";
// Importe a função customMessages

const updateValidator = {
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required().min(3).max(50).messages(customMessages("nome")), // Use a função customMessages
    slug: Joi.string().required().min(3).max(50).messages(customMessages("slug")), // Use a função customMessages
    description: Joi.string().required().max(500).messages(customMessages("descrição")), // Use a função customMessages
    basePrice: Joi.number().required().positive().messages(customMessages("preço base")), // Use a função customMessages
    discountPercentage: Joi.number().min(0).max(100).messages(customMessages("porcentagem de desconto")), // Use a função customMessages
    imageUrls: Joi.array().items(Joi.string()).min(1).messages(customMessages("imageUrls")), // Use a função customMessages
    categoryId: Joi.string().required().messages(customMessages("categoria")), // Use a função customMessages
  }),
};

export { updateValidator };
