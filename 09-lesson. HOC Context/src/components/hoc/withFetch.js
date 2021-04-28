import React, { Component } from 'react';

// const withFetch = (url, WrappedComponent) => {
const withFetch = url => WrappedComponent => {
  return class WithFetch extends Component {
    state = {
      data: [],
      loading: false,
      error: null,
    };

    componentDidMount() {
      this.setState({ loading: true });
      fetch(url)
        .then((res) => res.json())
        .then((data) => this.setState({ data }))
        .catch((error) => this.setState({ error }))
        .finally(() => {
          this.setState({ loading: false });
        });
    }

    render() {
      return <WrappedComponent {...this.props} {...this.state} />;
    }
  };
};

export default withFetch;




// function sum(a, b, c) {}
// sum(5, 10, 15)

// sum(a)(b)(c)


// IIFE
// (function() {
//   console.log(a)
// })(a)




