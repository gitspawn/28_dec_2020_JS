// https://www.youtube.com/watch?v=CpvpZKO0Lmk

/*
100 - INFORMATION
200 - ok, succes,
  300 - redirects
400 - client errors
500 - server errors
*/


// let options = {
//   afdads: sdfaf,
//   qEFQERQ: dfDFF
// }

// fetch(url, options)

// =====================
// let data = ''
// console.log('Код до запроса')
// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(users => {
//     data = users
//     console.log('Внутри промиса', data)
//   })
// console.log('Код после запроса')
// console.log('За промисом', data)
//======================



// ==========
// jsonplaceholder
/*
let options = {
  method: "GET",
  headers: {
    'Content-type': 'application/json; charset=UTF-8'
    // 'Content-type': 'text/html'
  }
}

fetch('https://jsonplaceholder.typicode.com/users', options)
  .then(response => response.json())
  .then(users => {
    data = users
    console.log('Внутри промиса', data)
  })


  */
//=========
//  algoria

// let url = 'http://hn.algolia.com/api/v1/search?query=coronavirus&tags=story'

// fetch(url, {})
//   .then(res => res.json())
//   // .then(({ hits }) => console.log(hits));
//   .then((data) => console.log(data));

// ==================================
// news api
// https://newsapi.org/


// let API_KEY = '8bc2be7fce9f45c3be5446f60af3b87c'
// let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`

// fetch(url, {})
//   .then(res => res.json())
//   .then(news => console.log(news))
//   .catch(err => console.log(err))



// =====
// pixabay

/* 
comments: 0
downloads: 1
favorites: 0
id: 6089333
imageHeight: 3479
imageSize: 2119748
imageWidth: 6184
largeImageURL: "https://pixabay.com/get/gfd15191c1115a6ea0667d67fd80d148025fdf8b3ad428d11ccbc5324488d5a1b8437c051ad9330de10239ad2710616bd0fd454eaba7cfcb5a30fdc7896aabb28_1280.jpg"
likes: 1
pageURL: "https://pixabay.com/photos/tulips-coffee-background-copy-space-6089333/"
previewHeight: 84
previewURL: "https://cdn.pixabay.com/photo/2021/03/12/10/44/tulips-6089333_150.jpg"
previewWidth: 150
tags: "tulips, coffee, background"
type: "photo"
user: "alirazagurmani9272"
userImageURL: "https://cdn.pixabay.com/user/2021/03/13/07-13-48-986_250x250.jpeg"
user_id: 15993536
views: 2
webformatHeight: 360
webformatURL: "https://pixabay.com/get/g61e92ade3c3e7dc2b8e231d36039c6e032abe919138febcdd45fb1c79558074b58b3406434dd9d8c381f0cde7c830f3a32b7a93cf13921a4bbfb12ec98990bc2_640.jpg"
webformatWidth: 640
*/


let API_KEY = '16847035-2769300c76d48561bbb060e95';
let url = `https://pixabay.com/api/?key=${API_KEY}&category=backgrounds&per_page=3&order=latest`

fetch(url)
  .then(res => res.json())
  .then(img => {
    renderGallery(img.hits)
  })
  .catch(err => console.log(err))


let root = document.querySelector('#root');

console.log(root)

function createImg(objImg) {
  return `<img src="${objImg.webformatURL}" alt="${objImg.tags}">`
}

function renderGallery(imgArr) {
  let markup = imgArr.reduce((acc, el) => {
    return createImg(el) + acc
  }, '');
  root.insertAdjacentHTML("beforeend", markup)
}