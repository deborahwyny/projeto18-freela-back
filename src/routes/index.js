import { Router } from "express"
import usuarioRouter from "./usuario.routes.js"
import petsRouter from "./pets.routes.js"


const router = Router()
router.use(usuarioRouter)
router.use(petsRouter)



export default router
