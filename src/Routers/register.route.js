import express from 'express'
import { validId , validUser, } from '../Middlewares/validateUser.middleware.js';
import {create , findAllUsers, findById} from '../Controllers/User.RegisterController.js'
import verifyEmailExists  from '../Middlewares/verifyEmailExists.middleware.js';

const router = express.Router()

router.post('/', verifyEmailExists,  create);
router.get('/', findAllUsers)
router.get('/:id', validId, validUser,  findById)
export default router