import registerService from "../Services/registerService.js"


 const verifyEmailExists = async (req, res, next)=>{

    const {email} = req.body
   
    try{
        const user = await registerService.findEmail(email)

        if(email === user.email){  
            return res.status(409).send ({message:"email already registered, please try another email"})
        } 
        else{
            next ()
        }
    }catch(err){return res.status(500).send({message:err})}
  


}

export default verifyEmailExists