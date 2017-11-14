const { addPlayer } = require('../../services/players')

function addNewPlayer (req, res) {
	const { name, age, location, nickname, twitter, role  } = req.body
	addPlayer(name, age, location, nickname, twitter, role)
	res.redirect("/players")
}

module.exports = addNewPlayer