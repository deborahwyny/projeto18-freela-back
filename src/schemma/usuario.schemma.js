import Joi from "joi"

export const usuarioSchemma = Joi.object({
    nome:Joi.string().required().trim(), 
    cpf:Joi.string().required().trim(), 
    telefone:Joi.string().required().trim().max(9),
    email:Joi.string().required().trim().email(),
    senha:Joi.string().required().trim().min(3),
    confirmar_senha:Joi.string().required().valid(Joi.ref('senha')).trim()
})


export const loginSchemma = Joi.object({
    email:Joi.string().required().trim().email(),
    senha:Joi.string().required().trim().min(3)

})