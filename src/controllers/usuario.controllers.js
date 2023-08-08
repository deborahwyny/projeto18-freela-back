import { db } from "../database/database.connection.js"
import  bcrypt from 'bcrypt'
import { v4 as uuid } from 'uuid'



export async function cadastroUser(req, res){

    const  {nome, cpf, telefone, email, senha, confirmar_senha} = req.body

    try {

        const emailValidate = await db.query('SELECT * FROM usuario WHERE email=$1;', [email])
        if (emailValidate.rows.length !== 0)  return res.status(409).send("email invalido")

        const bcryptSenha = bcrypt.hashSync(senha, 3)

        const cadastro = await db.query('INSERT INTO usuario ( email, senha) VALUES ($1, $2);', [email, bcryptSenha])

        res.sendStatus(201)

    } catch(err){
        res.status(500).send(err.message)
    }
}


export async function loginUser(req, res){

    const {email, senha} = req.body

    try {

        const verificadorLogin = await db.query(`SELECT * FROM usuario WHERE email = $1`, [email])


        if (verificadorLogin.rowCount === 0) {
            return res.sendStatus(401);
        }


        const user = verificadorLogin.rows[0];


        const senhaCorreta = await bcrypt.compare(senha, user.senha);

        if (!senhaCorreta) {
            return res.status(401).send("E-mail ou senha inválido");
        }

        const sessionToken = uuid();

        const login = await db.query('INSERT INTO token (usuario_id, token) VALUES ($1, $2);', [user.id, sessionToken])

        res.status(200).send({sessionToken})


    } catch(err){
        res.status(500).send(err.message)
    }
}