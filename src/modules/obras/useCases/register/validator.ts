import { Joi, Segments } from "celebrate";
import { customMessages } from "../../../../utils/erros";
// Importe a função customMessages

const registerValidator = {
  [Segments.BODY]: Joi.object().keys({
    descricaoObra: Joi.string().required().min(3).max(50).messages(customMessages("descrição da obra")),
    empresaObra: Joi.string().required().min(3).max(50).messages(customMessages("empresa da obra")),
    logo: Joi.string().uri().allow(null, "").messages(customMessages("logotipo")),
    enderecoCompleto: Joi.string().required().min(3).max(100).messages(customMessages("endereço completo")),
    nomeResponsavel: Joi.string().required().min(3).max(50).messages(customMessages("nome do responsável")),
    telefoneContato: Joi.string()
      .required()
      .min(8)
      .max(20)
      .messages(customMessages("número de telefone de contato")),
    ativo: Joi.boolean().required().messages(customMessages("status ativo")),
  }),
};

export { registerValidator };
