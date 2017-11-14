const { removePlayer } = require('../../services/players')

function deletePlayer (req, res) {
	const { id } = req.params
  	removePlayer(id)
  	res.status(200).send(`player w/ id ${id} has been removed succesfully`)
}

module.exports = deletePlayer