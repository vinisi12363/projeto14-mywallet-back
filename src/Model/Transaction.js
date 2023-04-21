import mongoose from 'mongoose';

const transacitonSchema = new mongoose.Schema({
    data: {type:String , required:true }, 
    amount: {type:Number ,required:true},
    descript: {type:String , required:true},
    type:{type:String, required:true}
  });

  const transaction = mongoose.model('Account', transacitonSchema);
  
  export default transaction