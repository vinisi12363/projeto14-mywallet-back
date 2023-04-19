const route = require('express').Router()
const userController = require ('../Controllers/RegisterController')

route.post('/', userController.registerNewUser)

module.exports  =  route