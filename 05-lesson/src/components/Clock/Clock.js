import React, { Component } from "react";
import "./Clock.css";

export default class Clock extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     time: new Date().toLocaleTimeString()
  //   }
  //   console.log('Clock constuctor')
  // }
  state = {
    time: new Date().toLocaleTimeString()
  }

  intervalId = null


  componentDidMount() {
    console.log('componentDidMount set Interval')
    this.intervalId = setInterval(
      () => this.setState({ time: new Date().toLocaleTimeString() }), 1000
    );
  }

  componentWillUnmount() {
    console.log('intervalId', ` ${this.intervalId}`)
    clearInterval(this.intervalId)
  }

  render() {
    console.log('Clock render...')
    return <div className="Clockface">{this.state.time}</div>;
  }
}
