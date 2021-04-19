
import React, { Component } from 'react'
import Spinner from './Spinner'
import Notification from './Notification'
import ArticleList from './ArticleList'

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
        {/* {error && <p>Something went wrong!</p>} */}
        {error && <Notification message={`Something went wrong: ${error.message}`}/>}
        
        {/* {loading && <div>Loading...</div> } */}
        {loading && <Spinner message="Loading..."/> }
        
        {articles.length > 0 && <ArticleList articles={articles}/>}
      </div>
    )
  }
}
