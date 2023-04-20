import registerService from '../Services/registerService.js'
import bcrypt from 'bcrypt'

export const create = async (req , res)=>{
    const {name, email, password} = req.body

    if(!name ||  !email || !password) return res.status(400).json({message:"todos os campos sao obrigatorios"})

    try{    
        const user = await registerService.create(req.body)
    
        if(!user) return res.status(400).send({message:"Error creating user"})
        res.status(201).send({
            message: "user created secessfully",
            id: user._id,
            name:user.name,
            email:user.email,
        })
    }catch(err){
        res.status(500).json({message:err.message})
    }

}

export const findAllUsers = async (req, res) =>{

    try{
        const users = await registerService.findAll()

        if(users.length === 0 ) return res.status(400).json({message:"There are no registered users"})
    
        res.send(users)
    
    }catch(err){
        res.status(500).json({message:err})
    }
   
}

export const findByEmail = async (req , res) => {
    const {email} = req.params

    try {
        const user =  await registerService.findEmail(email)

        res.send(user)
    }catch(err){return res.status(500).json({message:err.message})}
    


}

export const findById = async (req , res) => {
  const {id} = req.params

  try{
    const user = await registerService.findByIdService(id)

  
    res.send(user)
  }catch(err){res.status(500).send({error:err.message})}

}
