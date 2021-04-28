import React, { Component } from "react";


let pizza = {
  name: 'Dominos',
  price: 190
}

let withHigherOrderComponent = WrappedComponent => {
  return class WithHigherOrderComponent extends Component {
    render (){
      return (
        <WrappedComponent 
          {...this.props} 
          extraProp = 'Extra prop from HOC' 
          pizza={pizza}
        />
      )
    }
  }
}

export default withHigherOrderComponent