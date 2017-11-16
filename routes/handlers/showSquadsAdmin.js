const { getPlayers } = require('../../services/players')

function showSquadsAdmin (req, res) {
	const allPlayers = getPlayers()
	const allSquads = allPlayers.map( player => player.squad )
	const eachSquad = allSquads.filter( function(val, index){
		return allSquads.indexOf(val) == index
	})
	res.render("squads", { eachSquad })
}

module.exports = showSquadsAdmin