const mongoose = require('mongoose')
const Schema = mongoose.Schema
const collection = 'news'

const NewSchema = new Schema({
    title: String,
    intro: String,
    img: String,
    body: String,
}, { collection })

module.exports = mongoose.model('New', NewSchema)