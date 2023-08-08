import { db } from "../database/database.connection.js"
import  bcrypt from 'bcrypt'


export async function cadastroUser(req, res){

    const  {nome, cpf, telefone, email, senha, confirmar_senha} = req.body

    try {

        const emailValidate = await db.query('SELECT * FROM usuario WHERE email=$1;', [email])
        if (emailValidate.rows.length !== 0)  return res.status(409).send("email invalido")

        const cpfValidate = await db.query('SELECT * FROM usuario WHERE email=$1;', [cpf])
        if (cpfValidate.rows.length !== 0)  return res.status(409).send("email invalido")
        
        const telefoneValidate = await db.query('SELECT * FROM usuario WHERE email=$1;', [telefone])
        if (telefoneValidate.rows.length !== 0)  return res.status(409).send("email invalido")

        const bcryptSenha = bcrypt.hashSync(senha, 3)
        const bcryptConfirmarSenha = bcrypt.hashSync(confirmar_senha, 3);


        const cadastro = await db.query('INSERT INTO cadastro (nome, cpf, telefone, email, senha, confirmar_senha) VALUES ($1, $2, $3, $4, $5, $6);', [nome, cpf, telefone, email, bcryptSenha, bcryptConfirmarSenha])

        res.sendStatus(201)

    } catch(err){
        res.status(500).send(err.message)
    }
}