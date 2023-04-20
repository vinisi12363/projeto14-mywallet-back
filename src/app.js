
import  connectDataBase from './Config/dbConnection.js'
import registerRoute from './Routers/register.js' 
import express from 'express'

const app = express()



app.use(express.json())
app.use("/registrar", registerRoute)

connectDataBase()

const port = 5000



app.listen (port, ()=>{console.log (`servidor rodando na porta ${port}`)})


