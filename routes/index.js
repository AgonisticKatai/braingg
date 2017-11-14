const express = require('express')

const showPlayers = require('./handlers/showPlayers')
const addNewPlayer = require('./handlers/addNewPlayer')
const deletePlayer = require('./handlers/deletePlayer')

const router = express.Router()

router.get('/', (req, res) => {
	res.render("mainpage")
})

router.get('/squads', (req, res) => {
	res.render("squads")
})

router.get("/players", showPlayers)
router.post("/players", addNewPlayer)

router.delete("/players/:id", deletePlayer)

module.exports = router