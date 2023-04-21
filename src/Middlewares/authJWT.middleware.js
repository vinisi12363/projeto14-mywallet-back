import  Jwt from "jsonwebtoken";
import dotenv from 'dotenv'
dotenv.config()


export const authJWT =  (req , res , next)=>{
   
    try{
        const {authorization} = req.headers
        const parts = authorization.split(" ")
        const [schema , token] = parts 
        if (parts === undefined) return res.status(401)

        if(!authorization)  return res.status(401)
    
        if(parts.length !== 2)  return res.status(401)
    
        if(schema !== 'Bearer') return res.status(401)

        Jwt.verify(token, process.env.SECRET_JWT , (err, decoded )=>{
            console.log(err)
            console.log(decoded)
        })

    
        next();
    }catch(err){res.status(500).send({message:err.message})}
}


export default {authJWT}