const express = require('express')
const bodyParser = require('body-parser')

const routes = require('./routes')

const app = express()

app.set('view engine', 'pug')
app.use( express.static('public') )

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(routes)

app.listen(3030)
console.log('listening on port 3030')