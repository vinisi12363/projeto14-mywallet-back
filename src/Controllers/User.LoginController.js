import loginService from '../Services/loginService.js'


export const login = async (req, res) =>{
    const {email , password} = req.body

    try{
        const user = await loginService.findUser(email , password)

       if(user.length === 0 ) return res.status(400).json({message:"There are no registered users"})
    
        res.status(200).send({message:"usuario logado com sucesso"})
    
    }catch(err){
        res.status(500).json({message:err})
    }
   
}


export default {login}