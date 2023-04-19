const bcrypt = require('bcrypt')
const userSchema = require('../Model/User')

const create = (body) => userSchema.validate(body)

module.exports = create

