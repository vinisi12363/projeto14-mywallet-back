import bcrypt from 'bcrypt'
import  User from '../Model/User.js'


const create = (body) => User.create(body)


const findAll = () => User.find()

const findEmail = (email) => User.find({email:email})

export default {create, findAll, findEmail}