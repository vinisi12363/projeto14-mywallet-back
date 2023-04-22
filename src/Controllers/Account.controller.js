import {getUserMovement, recordTransaction} from '../Services/bankAccount.service.js'
import dayjs from 'dayjs'
import Jwt from 'jsonwebtoken'
import {findUserID} from '../Services/sessionService.js'

export const getMovement = async (req, res) => {
  const {authorization} = req.headers
  const parts = authorization.split(" ")
  const [schema , token] = parts    
  
    try {
      Jwt.verify(token, process.env.SECRET_JWT , async (err, decoded )=>{
        if(err) return res.status(401).send({message:"Token invalid"})
        if (decoded) {
          console.log("dentro do get",decoded) 
             const userId = decoded.id
            
             const movement =  await getUserMovement(userId)
             if (!movement) return res.send([])
             res.status(201).send(movement)
    
        }
      })

    }catch(err){res.status(500).send("ERRO NO GET MOVEMENT", err)}
}




export const addMovement = async (req, res)=>{
  const {amount , descript , type} = req.body
  const {authorization} = req.headers
  const parts = authorization.split(" ")
  const [schema , token] = parts  
  const data = dayjs().format('DD/MM')
  
  
  try{
    Jwt.verify(token, process.env.SECRET_JWT , async (err, decoded )=>{
      if(err) return res.status(401).send({message:"Token invalid"})
      if (decoded) {
           const userId = decoded.id
          await recordTransaction({userId ,data , amount , descript, type })

          res.status(201).send({message:"movement created"})
  
      }
     
  })
   
    

  }catch(err){res.status(500).send({message:err.message})}


}
export default {getMovement, addMovement}