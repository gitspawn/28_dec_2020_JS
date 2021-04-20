import React, { Component } from "react";
import Spinner from "./Spinner";
import Notification from "./Notification";
import ArticleList from "./ArticleList";
import SearchForm from "./SearchForm";
import articlesApi from "../services/articlesApi";

// import axios from 'axios'

export default class App extends Component {
  state = {
    articles: [],
    error: false,
    loading: false,
    searchQuery: "",
    page: 0,
  };

  // componentDidMount() {
  // console.log(articlesApi.fetchArticlesWithQuery('react'))
  // this.setState({loading: true})
  // axios.get('https://hn.algolia.com/api/v1/search?query=react')
  //   .then((response) => {
  //     console.log(response.data.hits)
  //     return this.setState({
  //       articles: response.data.hits,
  //       loading: false
  //      })
  //   })
  // .catch((error) => this.setState({ error }))
  // .finally(() => this.setState({loading: false}));
  // }

  componentDidMount() {
    // this.setState({loading: true})
    // this.fetchArticles('react')
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('prevProps', prevProps)
    // console.log('prevState', prevState)

    let prevQuery = prevState.searchQuery;
    let nextQuery = this.state.searchQuery;

    if (prevQuery !== nextQuery) {
      // console.log('Можно обновлять стейт....')
      this.fetchArticles();
    }
  }

  // fetchArticles = (query) =>{
  //   let {searchQuery} = this.state

  //   // console.log('fetchArticles query', query)
  //   // articlesApi.fetchArticlesWithQuery(query)
  //   articlesApi.fetchArticlesWithQuery(searchQuery)
  //   .then((articles) => this.setState({articles}))
  //   .catch((error) => this.setState({ error }))
  //   .finally(() => this.setState({loading: false}));
  // }

  // Load More Articles
  // fetchArticles = () =>{
  //   let {searchQuery,page} = this.state
  //   articlesApi.fetchArticlesWithQuery(searchQuery, page)
  //   // .then((articles) => this.setState({articles}))
  //   .then((articles)=> this.setState((prevState)=>{ return {
  //     articles,
  //     page: prevState.page + 1
  //   }}))
  //   .catch((error) => this.setState({ error }))
  //   .finally(() => this.setState({loading: false}));
  // }

  fetchArticles = () => {
    // State destucturing
    let { searchQuery, page } = this.state;
    // Set loder
    this.setState({ loading: true });

    articlesApi
      .fetchArticlesWithQuery(searchQuery, page)
      .then((articles) =>
        this.setState((prevState) => {
          return {
            articles: [...prevState.articles, ...articles],
            // articles: [...articles],
            page: prevState.page + 1,
          };
        })
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSeachFormSubmit = (query) => {
    this.setState({
      searchQuery: query,
      articles: [],
    });
  };

  render() {
    let { articles, error, loading } = this.state;
    return (
      <div>
        {/* <SearchForm onSubmit={this.fetchArticles}/> */}
        <SearchForm onSubmit={this.handleSeachFormSubmit} />
        {error && (
          <Notification message={`Something went wrong: ${error.message}`} />
        )}
        {loading && <Spinner message="Loading..." />}
        {articles.length > 0 && <ArticleList articles={articles} />}
        <button type="button" onClick={this.fetchArticles}>
          Load more
        </button>
      </div>
    );
  }
}
