import express from 'express'
import  {getMovement, addMovement} from '../Controllers//Account.controller.js'
import {authJWT} from '../Middlewares/authJWT.middleware.js'

const router = express.Router()

router.get('/', authJWT, getMovement)
router.post('/', authJWT, addMovement)  
export default router