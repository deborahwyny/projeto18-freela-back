import { db } from "../database/database.connection.js"



export async function postpets(req, res) {

    const {caracteristica, nome_tutor, nome_gatinho, telefone_contato } = req.body

    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer ', '');

    if (!token) {return res.sendStatus(401)}

    try {

        const validadeToken = await db.query('SELECT * FROM token WHERE token=$1;', [token])
        if (validadeToken.rows.length === 0) {return res.status(401).send('token não encontrado')}
        console.log('validadeToken',validadeToken)

        const user_id = validadeToken.rows[0].usuario_id;
        console.log('user_id',user_id)



        const userInfo = await db.query('SELECT * FROM cadastro WHERE id=$1;', [user_id])
        if (userInfo.rows.length === 0) {return res.status(401).send('Usuário não encontrado')}
        console.log('userInfo',userInfo)


        res.sendStatus(200)



    } catch(err){
        res.status(500).send(err.message)
    
    }
}
