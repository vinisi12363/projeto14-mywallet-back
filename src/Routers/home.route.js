import express from 'express'
import  {getMovement, addMovement} from '../Controllers//Account.controller.js'

const router = express.Router()

router.get('/', getMovement)
router.post('/', addMovement)  
export default router