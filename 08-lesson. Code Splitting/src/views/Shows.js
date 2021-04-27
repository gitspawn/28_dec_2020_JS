import React, { Component } from "react";
import { Link } from "react-router-dom";
import Searchbox from '../components/Searchbox'
import tvAPI from '../services/tv-api.js'
// import queryString from 'query-string';
import getQueryParams from '../utils/getQueryParams';





class Shows extends Component {
  state = {
    shows: []
  }

  // componentDidMount(){

  //   let {query} =  queryString.parse(this.props.location.search)

  //   if (query) {
  //     console.log('Ecть query')
  //     this.fetchShows(query)
  //     return 
  //   }

  //   this.fetchShows('batman')
  // }



  componentDidMount(){
    let {query} = getQueryParams(this.props.location.search)
    if (query) {
      console.log('Ecть query')
      this.fetchShows(query)
      return 
    }
    this.fetchShows('batman')
  }

  // componentDidUpdate(prevProps, prevState){
  //   // console.log(this.props)
  //   // let params = queryString.parse(this.props.location.search)
  //   // console.log(params)
    
  //   let  {query: prevQuery} = queryString.parse(prevProps.location.search)
  //   let  {query: nextQuery} = queryString.parse(this.props.location.search)
  //   if (prevQuery !== nextQuery){
  //     this.fetchShows(nextQuery)
  //   }
  // }
  
  componentDidUpdate(prevProps, prevState){
    let  {query: prevQuery} = getQueryParams(prevProps.location.search)
    let  {query: nextQuery} = getQueryParams(this.props.location.search)
    if (prevQuery !== nextQuery){
      this.fetchShows(nextQuery)
    }
  }

  fetchShows = (query)=>{
    tvAPI.fetchShowWithQuery(query).then((shows) => {
      return this.setState({shows})
    })
  }

handleChangeQuery = query =>  {
  // console.log(query)
  // this.props.history.push('/')
  this.props.history.push({
    pathname: this.props.location.pathname,
    search: `query=${query}`
  })
}



    render () {
      let {match} = this.props
      let {shows} = this.state


      return (
            <>
            <Searchbox onSubmit = {this.handleChangeQuery}/>
              {
                <ul>
                  {
                    shows.map((show) => {
                      return (
                        <li key={show.id}>
                          {/* <Link to={`${match.url}/${show.id}`}>
                            {show.name}</Link> */}
                             <Link to={{
                               pathname: `${match.url}/${show.id}`,
                              //  state: 'Я пришел со страницы Show'
                               state: {from: this.props.location}
                             }}>
                            {show.name}</Link>
                          </li>
                      )
                    })
                  }
                </ul>
              }
            </>
          );
    }
}


export default Shows;



// to={{
//   pathname: "/courses",
//   state: { fromDashboard: true }
// }}