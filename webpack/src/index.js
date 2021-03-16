import fetchAticles from './js/fetch-news'
import updateMarcup from './js/update-markup'



// console.log(fetchAticles())
// fetchAticles().then(data => console.log(data))
// fetchAticles().then(updateMarcup)
fetchAticles('coronavirus').then(data => updateMarcup(data))























// let API_KEY = '8bc2be7fce9f45c3be5446f60af3b87c'
// // let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`

// let url = `https://newsapi.org/v2/top-headlines?country=us`;

// let options = {
//   headers: {
//     // 'X-Api-Key': API_KEY
//     Authorization: API_KEY
//   }
// }

// fetch(url, options)
//   .then(res => res.json())
//   .then(({ articles }) => console.log(articles))
//   .catch(err => console.log(err))


// // let API_KEY = '16847035-2769300c76d48561bbb060e95';
// let url = `https://pixabay.com/api/?key=16847035-2769300c76d48561bbb060e95&category=backgrounds&per_page=10&order=latest`

// fetch(url)
//   .then(res => res.json())
//   .then(img => console.log(img))
// //   .catch(err => console.log(err))
