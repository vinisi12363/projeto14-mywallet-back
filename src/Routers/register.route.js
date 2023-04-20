import express from 'express'
import {create , findAllUsers} from '../Controllers/User.RegisterController.js'

const router = express.Router()

router.post('/', create);
router.get('/', findAllUsers)

export default router