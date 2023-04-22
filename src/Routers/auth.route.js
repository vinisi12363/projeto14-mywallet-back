import express from 'express'
import {login} from '../Controllers/User.AuthController.js'
import verifyEmailExists  from '../Middlewares/verifyEmailExists.middleware.js';

const router = express.Router()


router.post('/', verifyEmailExists, login)

export default router