const  registerService = require('../Services/registerService')




const registerNewUser = async (res , req)=>{
    const {name, email , pwd} = req.body;
    
    if(!name ||  !email || !pwd) return res.status(400).json({message:"todos os campos sao obrigatorios"})
    
    const validateUsr = validateUser({name, email, pwd})
    const userAlreadyExist = verifyUserAlreadyExist (email)
    const hashedPwd = bcrypt.hashSync (pwd, 10)

    const validation = userSchema.validate({user}, { abortEarly: false });
    if (validation.error) {
        const errors = validation.error.details.map((detail) => detail.message);
        return res.status(400).send(errors.message)
    }
  

    if(userAlreadyExist) return res.status(409).json({error:`email  ${email} ja cadastrado, por favor escolha outro email`})
    
    try{ 
        await db.collection("user").insertOne({name, email, pwd})

        res.status(200).json({message:`usuario ${name} criado com sucesso`})
    }catch(er){
        return res.status(500).json({error:er})
    }
    

}



const verifyUserAlreadyExist = async (email)=>{
     
    try{
        const exists = await db.collection("users").findOne({email})
        if (exists){
            return true;
        }
        return false;
    }catch(err){
        console.log("Erro na funcao verifyUser: ",err)
    }    
}


module.exports = { registerNewUser }