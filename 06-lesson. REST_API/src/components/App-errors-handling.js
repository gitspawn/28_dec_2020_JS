
import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

  state = {
    articles: [],
    error: false,
    loading: false
  }

  componentDidMount() {
    this.setState({loading: true})
    axios.get('https://hn.algolia.com/api/v1/search?query=react')
      .then((response) => {
        console.log(response.data.hits)
        return this.setState({ 
          articles: response.data.hits,
          loading: false
         })
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({loading: false}));
  }

  render() {
    let {articles, error, loading} = this.state
    return (
      <div>
        {error && <p>Something went wrong!</p>}
        {loading && <div>Loading...</div> }
        {articles.length > 0 && (
          <ul>{this.state.articles.map(({ objectID, title, url }) => (
            <li key={objectID}>
              <a href={url} target="_blank" rel="noreferrer noopener">{title}</a>
            </li>
          ))}</ul>
        )}
      </div>
    )
  }
}
