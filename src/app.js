import express, { Router } from "express"
import cors from "cors"
import dotenv from "dotenv"
import router from "./routes/index.js";

//// configs
const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()

app.use(router)



// Deixa o app escutando, à espera de requisições
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))