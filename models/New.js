const mongoose = require('mongoose')
const Schema = mongoose.Schema
const collection = 'news'

const NewSchema = new Schema({
    title: String,
    intro: String,
    img: String,
    body: String,
    createdAt: {type: Date, default: Date.now} // Puedes añadir la fecha de creación
}, { collection })

module.exports = mongoose.model('New', NewSchema)