export default function fetchAticles(search = '') {
  let API_KEY = '8bc2be7fce9f45c3be5446f60af3b87c';

  const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${API_KEY}&q=${search}`


  return fetch(url)
    .then(res => res.json(res))
    .then(({ articles }) => articles)
}

// export default fetchAticles;