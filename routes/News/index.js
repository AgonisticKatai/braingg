const express = require('express')
const router = express.Router()

const getNews = require('./getNews')

router.get('/news', getNews )

module.exports = router