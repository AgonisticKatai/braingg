const { addNew } = require('../../services/news')

function addNews (req, res) {
	const { title, intro, img, body  } = req.body
	addNew(title, intro, img, body)
	res.redirect('/news')
}

module.exports = addNews