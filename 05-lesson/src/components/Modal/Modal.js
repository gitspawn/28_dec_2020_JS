import React, { Component } from "react";
import "./Modal.css";

export default class Modal extends Component {

  componentDidMount() {
    // console.log('Modal componentDidMount')
    console.log('Modal addEventListener')

    window.addEventListener('keydown', this.handleKeyDown)

  }


  componentWillUnmount() {
    console.log('Modal unmount')
    console.log('Modal RemoveEventListener')
    window.removeEventListener('keydown', this.handleKeyDown)
  }


  handleKeyDown = (event) => {
    console.log(event.code)
    if (event.code === 'Escape') {
      console.log('Закрываем модалку')
      this.props.onClose()
    }
  }

  render() {
    return (
      <div className="Backdrop">
        <div className="Modal">
          {this.props.children}
        </div>

      </div>
    );
  }
}
