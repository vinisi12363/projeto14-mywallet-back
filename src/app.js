
const connectDataBase = require('./Config/dbConnection')
const registerRoute = require ('./Routers/register') 


const express = require ('express')
const app = express()



app.use(express.json())
app.use("/registrar", registerRoute)
connectDataBase()

const port = 5000



app.listen (port, ()=>{console.log (`servidor rodando na porta ${port}`)})


