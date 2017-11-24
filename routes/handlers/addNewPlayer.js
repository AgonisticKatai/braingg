const { addPlayer } = require('../../services/players')

function addNewPlayer (req, res) {
	const { name, age, location, nickname, twitter, role, squad  } = req.body
	addPlayer(name, age, location, nickname, twitter, role, squad)
	res.redirect("/admin/players")
}

module.exports = addNewPlayer