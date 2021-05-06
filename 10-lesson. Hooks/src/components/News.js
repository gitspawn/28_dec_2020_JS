import React, { useState, useEffect } from "react";
import axios from "axios";

const News = () => {
  let [articles, setArticles] = useState([]);
  let [error, setError] = useState(null);
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    let fetchArticles = () => {
      return axios
        .get('https://hn.algolia.com/api/v1/search?query=react')
        .then(({ data }) => setArticles(data.hits))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    };

    fetchArticles();
    
    return () => {    
      // написать ф-цию отмены http запроса
    }
  }, []);

  return (
    <ul>
      {articles.map(({ objectID, title, url }) => (
        <li key={objectID}>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default News;


// Сменить раут пока не пришел http-ответ чтобы не была утечка памяти

// export default class News extends Component {
//   state = {
//     articles: [],
//   };

// componentDidMount() {
//   axios
//     .get('https://hn.algolia.com/api/v1/search?query=react')
//     .then(({ data }) => this.setState({ articles: data.hits }))
//     .catch(error => {
//       console.log(error);
//     });
// }

//   render() {
//     return (
//       <ul>
//         {this.state.articles.map(({ objectID, title, url }) => (
//           <li key={objectID}>
//             <a href={url} target="_blank" rel="noopener noreferrer">
//               {title}
//             </a>
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }
