import userService from '../Services/registerService.js'

 const create = async (req , res)=>{
    const {name, email, password} = req.body

    if(!name ||  !email || !password) return res.status(400).json({message:"todos os campos sao obrigatorios"})

    try{    
        const user = await userService.create(req.body)
    
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


// export const verifyUserAlreadyExist = async (email)=>{
     
//     try{
//         const exists = await db.collection("users").findOne({email})
//         if (exists){
//             return true;
//         }
//         return false;
//     }catch(err){
//         console.log("Erro na funcao verifyUser: ",err)
//     }    
// }


export default {create}