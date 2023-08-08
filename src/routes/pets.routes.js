import { Router } from "express"
import { validateSchemma } from "../middlewares/validation.middleware.js"
import { postpets } from "../controllers/pets.controllers.js"
import { petsSchema } from "../schemma/pets.schemma.js"

const petsRouter = Router()
petsRouter.post("/pets", validateSchemma(petsSchema), postpets)



export default petsRouter
