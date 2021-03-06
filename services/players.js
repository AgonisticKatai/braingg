let players = require('../Data/player.json')

function getPlayers() {
  return players
}

let counter = 10;

function addPlayer(name, age, location, nickname, twitter, role, squad) {
  const newPlayer = {
    name,
    age, 
    location,
    nickname, 
    twitter, 
    role, 
    squad,
    id: counter+1
  }
  counter = newPlayer.id+1
  players.push(newPlayer)
}

function removePlayer(id) {
  players = players.filter( player => player.id !== +id)
}

// function editPlayer(id, dataToEdit ) {
//   const { name, age, location, nickname, twitter, role } = dataToEdit
//   players = players.map( player => {
//     if (player.id === id) {
//       player.name = name || player.name
//       player.age = age || player.age
//       player.location = location || player.location
//       player.nickname = nickname || player.nickname
//       player.twitter = twitter || player.twitter
//       player.role = role || player.role
//     }
//     return player
//   })
// }


module.exports = { getPlayers, addPlayer, removePlayer }