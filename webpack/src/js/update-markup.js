import articlesTpl from '../templates/articles.hbs'

let root = document.querySelector('#root');

function updateMarcup(articles) {
  let markup = articlesTpl(articles)
  root.insertAdjacentHTML('beforeend', markup)
}

export default updateMarcup