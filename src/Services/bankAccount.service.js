import Transaction from "../Model/Transaction.js";


export const recordTransaction = (body)=> Transaction.create(body)

export const getUserMovement = (id) =>Transaction.find({userId:id})



export default { recordTransaction, getUserMovement}