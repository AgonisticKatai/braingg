const { getPlayers } = require('../../services/players')
const { getNews } = require('../../services/news')

function showHome (req, res) {
	const allPlayers = getPlayers()
	const allSquads = allPlayers.map( player => player.squad )
	const eachSquad = allSquads.filter( function(val, index){
		return allSquads.indexOf(val) == index
	})

	const news = getNews().slice(0,3)

	res.render("home", { eachSquad, news })
}

module.exports = showHome