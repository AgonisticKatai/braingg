let news = require('../Data/news.json')

function getNews() {
  return news
}

let counter = 10;

function addNew( title, intro, img, body ) {
  const newNew = {
    title, 
    intro, 
    img, 
    body,
    id: counter+1
  }
  counter = newNew.id+1
  news.push(newNew)
}

function removeNew(id) {
  news = news.filter( item => item.id !== +id)
}

module.exports = { getNews, addNew, removeNew }