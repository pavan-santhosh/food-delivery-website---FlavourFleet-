const mongoose = require('mongoose')

const UserScheme = new mongoose.Schema({
    username: String,
    email: String,
    password: String    
})

const UserModel = mongoose.model("users", UserScheme)

module.exports = UserModel