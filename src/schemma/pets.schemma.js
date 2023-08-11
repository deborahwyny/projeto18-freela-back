import Joi from "joi"

export const petsSchema = Joi.object({
    caracteristica: Joi.string().required().trim(),
    nome_tutor: Joi.string().required().trim(), 
    nome_gatinho: Joi.string().required().trim(), 
    telefone_contato: Joi.string().required().trim(),
    disponivel: Joi.boolean().required()
});
