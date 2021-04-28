// Render prop pattern

import React, { Component } from 'react'

export default class Toggler extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    return this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };
  // render() {
  //  return this.props.render({
  //    isOpen: this.state.isOpen,
  //    onToggle: this.toggle
  //  })
  // }

  render() {
    return this.props.children({
      isOpen: this.state.isOpen,
      onToggle: this.toggle
    })
   }
}
