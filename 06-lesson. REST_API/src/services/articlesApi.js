import axios from 'axios';


let fetchArticlesWithQuery = (searchQuery, page=0) =>{
  return axios.get(`https://hn.algolia.com/api/v1/search?query=${searchQuery}&&page=${page}&hitsPerPage=5`)
  .then((response) => {
    console.log(response.data)
    return response.data.hits
  })
}



export default {
  fetchArticlesWithQuery
}