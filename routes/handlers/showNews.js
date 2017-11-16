const { getNews } = require('../../services/news')

function showNews (req, res) {
	const news = getNews()
	
  	res.render('news', { news })
}

module.exports = showNews