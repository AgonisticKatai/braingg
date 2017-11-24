const mongoose = require('mongoose')
const Schema = mongoose.Schema
const collection = 'players'

const PlayerSchema = new Schema({
    name: String,
    age: Number,
    img: String,
    nickname: String,
    location: String,
    twitter: String,
    role: String,
    squad: String,
}, { collection })

module.exports = mongoose.model('Player', PlayerSchema)