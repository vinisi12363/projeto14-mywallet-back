import  User from '../Model/User.js'


const create = (body) => User.create(body)

const findAll = () => User.find()

const findEmail = (email) => User.find({email:email})

const findByIdService = (id) => User.findById(id)

export default {create, findAll, findEmail, findByIdService}