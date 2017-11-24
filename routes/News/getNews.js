const News = require('../../../models/News')

function getNews(req, res) {
  //const { selection, limit, skip } = req

  News
  	.find()
    .then( news => res.json(news) )
}

module.exports = getNews