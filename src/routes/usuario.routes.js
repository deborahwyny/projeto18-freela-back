import { Router } from "express"
import { validateSchemma } from "../middlewares/validation.middleware.js"
import { usuarioSchemma } from "../schemma/usuario.schemma.js"
import { cadastroUser } from "../controllers/usuario.controllers.js"


const usuarioRouter = Router()
usuarioRouter.post("/cadastro", validateSchemma(usuarioSchemma), cadastroUser)




export default usuarioRouter
