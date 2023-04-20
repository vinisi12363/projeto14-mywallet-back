import express from 'express'
import {create , findAllUsers, findByEmail} from '../Controllers/User.RegisterController.js'

const router = express.Router()

router.post('/', create);
router.get('/', findAllUsers)
router.get('/:email', findByEmail)

export default router