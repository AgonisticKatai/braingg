const { getPlayers } = require('../../services/players')

function showPlayers (req, res) {
	const players = getPlayers()
	
  	res.render('form', { players })
}

module.exports = showPlayers