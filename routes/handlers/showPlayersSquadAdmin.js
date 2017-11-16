const { getPlayers } = require('../../services/players')

function showPlayersSquadAdmin (req, res) {
	const squad = req.params
	const allPlayers = getPlayers()
	players = allPlayers.filter( player => player.squad === squad.squad )
	res.render('form', { players })
}

module.exports = showPlayersSquadAdmin