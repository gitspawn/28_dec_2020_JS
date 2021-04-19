
import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

  state = {
    articles: [],
    error: false
  }

  componentDidMount() {
    axios.get('https://hn.algolia.com/api/v1/search?query=react')
      .then((response) => {
        console.log(response.data.hits)
        return this.setState({ articles: response.data.hits })
      })
      .catch((error) => this.setState({ error }))
    // .finally(() => { console.log("Hello") });
  }



  render() {
    let articles = this.state.articles.map(({ objectID, title, url }) => (
      <li key={objectID}>
        <a href={url} target="_blank" rel="noreferrer noopener">{title}</a>
      </li>
    ))

    return (
      <div>
        <ul>{articles}</ul>
      </div>
    )
  }
}
