const express = require('express')
const router = express.Router()

const getTeams = require('./getTeams')

router.get('/teams', getTeams )

module.exports = router