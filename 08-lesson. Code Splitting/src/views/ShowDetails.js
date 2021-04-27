import React, { Component } from 'react';
import tvAPI from '../services/tv-api.js';
import routes from '../routes'

export default class ShowDetails extends Component {
  state = {
    show: null,
  };

  componentDidMount() {
    tvAPI.fetchShowDetails(this.props.match.params.showId).then((show) => {
      return this.setState({ show });
    });
  }

  handleGoBack = ()=>{
    // console.log('Вернуться назад')
    // this.props.history.push('/shows')
    let { state} = this.props.location

    if (state && state.from) {
      return this.props.history.push(state.from)
    }
    this.props.history.push(routes.shows)
  }

  render() {
    return (
      <>
      <button type='button' onClick={this.handleGoBack}> Вернуться к списку шоу</button>
        {this.state.show && (
          <>
            <img
              src={this.state.show.image.medium}
              alt={this.state.show.name}
            />
            <h1> {this.state.show.name}</h1>
          </>
        )}
      </>
    );
  }
}

