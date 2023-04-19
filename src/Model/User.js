const joi  = require('joi')

const userSchema  = joi.object ({
    name:joi.string().required().min(3),
    email:joi.string().email().required(),
    password:joi.string().min(6).required()
})

module.exports = userSchema

