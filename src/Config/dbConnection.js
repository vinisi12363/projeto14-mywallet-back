const  {MongoClient} = require("mongodb")
const  dotenv = require("dotenv")
dotenv.config()

async function connectDataBase(){
    const mongoClient = new MongoClient(process.env.DATABASE_URL)
    const db = undefined
    try{
        mongoClient.connect()
        db = mongoClient.db()
    }catch(err){
        (err) => console.log(err.message)
}
}


module.exports = connectDataBase

