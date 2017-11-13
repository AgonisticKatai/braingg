const express = require('express')
const bodyParser = require('body-parser')

const { getPlayers, addPlayer, removePlayer } = require('./services/players')
//const players = require('./Data/player.json')

const app = express()

app.set('view engine', 'pug')
app.use( express.static('public') )

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/", (req, res) => {
	//console.log(getPlayers())
	const players = getPlayers()
	res.render('player', { players })
})

app.post("/", (req, res) => {
	const { name, age, location, nickname, twitter, role  } = req.body
	addPlayer(name, age, location, nickname, twitter, role)
	res.redirect("/")
})

app.delete("/:id", (req, res) => {
	const { id } = req.params
  	removePlayer(id)
  	res.status(200).send(`task w/ id ${id} has been removed succesfully`)
})

app.listen(3030)
console.log('listening on port 3030')