import mongoose from "mongoose";
import registerService from "../Services/registerService.js";



export const validUser = async (req, res, next) => {

    const {id} = req.params

    const user = await registerService.findByIdService(id)
    if (!user) return res.status(400).send({message:"User not found"})
    next();
}

export const validId = (req, res, next) => {

    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).send({message:"id is invalid"})

    next()
}

