const express = require('express')

const showPlayers = require('./handlers/showPlayers')
const addNewPlayer = require('./handlers/addNewPlayer')
const deletePlayer = require('./handlers/deletePlayer')

const router = express.Router()

// router.get('/', (req, res) => {
// 	res.send("hello")
// })

router.get("/", showPlayers)
router.post("/", addNewPlayer)

router.delete("/:id", deletePlayer)

module.exports = router