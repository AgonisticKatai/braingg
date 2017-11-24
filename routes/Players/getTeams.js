const Player = require('../../../models/Player')

function getTeams(req, res) {
  //const { selection, limit, skip } = req

  Player
  	.find()
    .then( player => player.map( player => player.squad) )
    .then( squad => squad.filter( function(val, index){
    	return squad.indexOf(val) == index
    })).
    .then(squad => res.json(squad))
}

module.exports = getTeams