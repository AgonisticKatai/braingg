require('dotenv').load()

const express = require('express')
const bodyParser = require('body-parser')
const {PORT, URL_DB} = process.env
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const routes = require('./routes')

const app = express()

app.set('view engine', 'pug')
app.use( express.static('public') )

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const db = require('./server/config/db')

db.openUri(URL_DB)

app.use(routes)

app.listen(PORT)
console.log(`listening on port ${PORT}`)