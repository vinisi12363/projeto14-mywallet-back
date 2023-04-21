import {getAll, recordTransaction} from '../Services/bankAccount.service.js'
import dayjs from 'dayjs'

export const getMovement = async (req, res) => {
    try {
        const moviment = await getAll()

        if (!moviment) return res.send([])

        res.send(moviment)

    }catch(err){}
}

export const addMovement = async (req, res)=>{
  const {amount , descript , type} = req.body 
  const data = dayjs().format('DD/MM')
  
  
  try{
    await recordTransaction({data , amount , descript, type })

    res.status(201).send({message:"movement created"})

  }catch(err){res.status(500).send({message:err.message})}


}
export default {getMovement, addMovement}