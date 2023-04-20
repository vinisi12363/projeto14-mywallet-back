import express from 'express'
import userController from '../Controllers/RegisterController.js'

const router = express.Router()

router.post('/', userController.create);

export default router