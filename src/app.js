
import connectDataBase from './Config/dbConnection.js'
import registerRoute from './Routers/register.route.js'
import loginRoute from './Routers/auth.route.js'
import accountRoute  from './Routers/home.route.js'
import express from 'express'
import cors from 'cors'
const app = express()


app.use(cors())
app.use(express.json())
app.use("/registrar", registerRoute)
app.use("/login", loginRoute)
app.use("/home", accountRoute)

connectDataBase()

const port =process.env.PORT ||  5000



app.listen (port, ()=>{console.log (`servidor rodando na porta ${port}`)})


