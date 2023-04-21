import Transaction from "../Model/Transaction.js";


export const getAll = () => Transaction.find()

export const recordTransaction = (body)=> Transaction.create(body)



export default {getAll, recordTransaction}