const express = require('express')

const player = require('./player.json')

const app = express()

app.set('view engine', 'pug');
app.use(express.static('public'));

app.get("/", (req, res) => {
	res.json(player)
})

app.listen(3000)
console.log('listening on port 3000')