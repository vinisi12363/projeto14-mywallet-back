import  User from '../Model/User.js'

const findUser = (email, password) => User.find({email:email , password:password}).exec()

export default {findUser}