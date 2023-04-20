import  User from '../Model/User.js'

const findUser = (email) => User.findOne({email:email}).select("+password ")
export default {findUser}