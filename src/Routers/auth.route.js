import express from 'express'
import loginController from '../Controllers/User.AuthController.js'
import verifyEmailExists  from '../Middlewares/verifyEmailExists.middleware.js';

const router = express.Router()


router.post('/', verifyEmailExists, loginController.login)

export default router