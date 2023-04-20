import mongoose from 'mongoose';
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
    name: {type:String, required:true}, 
    email: {type:String, required:true, unique:true, match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/},
    password: {type:String, select:false ,required:true},
    token: {type:String},
  });

userSchema.pre("save", async function (next) {
 this.password = await bcrypt.hash(this.password , 10)
 next()
})

  const User = mongoose.model('User', userSchema);
  
  export default User