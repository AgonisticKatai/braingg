const mongoose = require('mongoose')
const Schema = mongoose.Schema
const collection = 'users'

const UserSchema = new Schema({
    username: String,
    password: String,
}, { collection })

module.exports = mongoose.model('User', UserSchema)