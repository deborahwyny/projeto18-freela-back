import { Router } from "express"
import { validateSchemma } from "../middlewares/validation.middleware.js"
import { loginSchemma, usuarioSchemma } from "../schemma/usuario.schemma.js"
import { cadastroUser, loginUser } from "../controllers/usuario.controllers.js"


const usuarioRouter = Router()
usuarioRouter.post("/cadastro", validateSchemma(usuarioSchemma), cadastroUser)
usuarioRouter.post("/login", validateSchemma(loginSchemma), loginUser)




export default usuarioRouter
