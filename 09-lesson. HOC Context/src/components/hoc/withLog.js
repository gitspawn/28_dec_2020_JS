import React, { Component } from 'react';

 let withLog = (WrappedComponent) => {
  return class WithLog extends Component {
    componentDidMount(){
      console.log(WrappedComponent.name)
      console.log(this.props)
    }

    render () {
      return <WrappedComponent {...this.props}/>
    }
  }
}

export default withLog