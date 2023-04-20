import bcrypt from 'bcrypt'
import  User from '../Model/User.js'


const create = (body) => User.create(body)

export default {create}