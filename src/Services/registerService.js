import bcrypt from 'bcrypt'
import  User from '../Model/User.js'


const create = (body) => User.create(body)


const findAll = () => User.find()

export default {create, findAll}