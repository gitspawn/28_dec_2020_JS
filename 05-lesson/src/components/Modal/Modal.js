import React, { Component } from "react";
import "./Modal.css";

export default class Modal extends Component {
  render() {
    return (
      <div className="Backdrop">
        <div className="Modal">Modal Content</div>
      </div>
    );
  }
}
