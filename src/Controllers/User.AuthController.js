import loginService from '../Services/AuthService.js'
import bcrypt from 'bcrypt'

export const login = async (req, res) =>{
    const {email , password} = req.body
  

    try{
        const user = await loginService.findUser (email)
        const userIsValid =  await bcrypt.compare(password , user.password)
        
        if (!user) return res.status(404).send({message:"User not found"})

        if(user.length === 0 ) return res.status(400).json({message:"There are no registered users"})
        
        if(userIsValid) return res.status(200).send({message:"usuario logado com sucesso"})
    
    }catch(err){
        res.status(500).json({message:err})
    }
   
}


export default {login}