// Get params from props
// import React, { Component } from "react";
// const ShowDetails = ({ match }) => {
//   return <div>Show details {match.params.showId}</div>;
// };

// export default ShowDetails;
// ==============================

import React, { Component } from 'react';
import tvAPI from '../services/tv-api.js';

export default class ShowDetails extends Component {
  state = {
    show: null,
  };

  componentDidMount() {
    tvAPI.fetchShowDetails(this.props.match.params.showId).then((show) => {
      return this.setState({ show });
    });
  }

  render() {
    return (
      <>
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

{
  /* <img  src={this.state.show.image.medium} alt={this.state.show.name}/>
      <h1> {this.state.show.name}</h1> */
}
