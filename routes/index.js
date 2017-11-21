require('dotenv').load()

const express = require('express')

const showPlayers = require('./handlers/showPlayers')
const addNewPlayer = require('./handlers/addNewPlayer')
const deletePlayer = require('./handlers/deletePlayer')
const showHomeAdmin = require('./handlers/showHomeAdmin')
const showSquadsAdmin = require('./handlers/showSquadsAdmin')
const showPlayersSquadAdmin = require('./handlers/showPlayersSquadAdmin')
const addNews = require('./handlers/addNews')
const showNews = require('./handlers/showNews')
const showFormNews = require('./handlers/showFormNews')

const passport = require('../server/config/passport')

const router = express.Router()

router.get('/', (req, res) => {
	res.render('home')
})

// router.get('/admin', passport.authenticate('jwt', { session: false }), showHomeAdmin)
router.get('/admin', showHomeAdmin)
router.get('/squads', showSquadsAdmin)
router.get('/squads/:squad', showPlayersSquadAdmin)

router.get('/news', showNews)
router.post('/news', addNews)

router.get('/addnews', showFormNews)

router.get("/players", showPlayers)
router.post("/players", addNewPlayer)
router.delete("/players/:id", deletePlayer)

module.exports = router