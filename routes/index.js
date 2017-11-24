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

const showHome = require('./handlers/showHome')

const passport = require('../server/config/passport')

const router = express.Router()

//PUBLIC ROUTES
router.get('/', showHome)


//PRIVATE ROUTES
// router.get('/admin', passport.authenticate('jwt', { session: false }), showHomeAdmin)
router.get('/admin', showHomeAdmin)
router.get('/admin/squads', showSquadsAdmin)
router.get('/admin/squads/:squad', showPlayersSquadAdmin)

router.get('/admin/news', showNews)
router.post('/admin/news', addNews)

router.get('/admin/addnews', showFormNews)

router.get("/admin/players", showPlayers)
router.post("/admin/players", addNewPlayer)
router.delete("/admin/players/:id", deletePlayer)

module.exports = router