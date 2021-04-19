import React, { Component } from 'react';
import CounterControls from './CounterControls'


export default class Counter extends Component {
  static defaultProps = { initialValue: 0, step: 5 }
  static propTypes = {}


  // Access to props
  // render() {
  //   return (
  //     <div>
  //       {  console.log(this.props)}
  //       {/* {  console.log(this.props.initialValue)} */}
  //     </div>
  //   )
  // }

  //========================
  // Event and Event listener
  // render() {
  //   return (
  //     <div>
  //       Counter
  //       <button type="button" onClick={(event) => {
  //         console.log('Increment')
  //         // console.log(event.target)
  //         let targ = event.target
  //         setTimeout(() => {
  //           console.log(targ)
  //           // console.log(event.target)
  //         }, 2000);
  //       }}>Increment</button>
  //       <span> 0 </span>
  //       <button type="button" onClick={() => console.log('Dectement')}>Decrement</button>
  //     </div>
  //   )
  // }
  //==========================
  // Привязка контекста

  // // constructor() {
  // //   super();
  // //   this.handleIncrement = this.handleIncrement.bind(this)
  // // }

  // handleIncrement = () => {
  //   console.log('Increment')
  //   console.log(this);
  // }

  // handleDecrement = () => {
  //   console.log('Decrement')
  //   console.log(this);
  // }

  // render() {
  //   return (
  //     <div>
  //       Counter
  //       {/* <button type="button" onClick={() => console.log('Increment')}>Increment</button> */}
  //       {/* <button type="button" onClick={this.handleIncrement.bind(this)}>Increment</button> */}
  //       {/* this Via constucctor */}
  //       <button type="button" onClick={this.handleIncrement}>Increment</button>
  //       <span> 0 </span>
  //       {/* <button type="button" onClick={this.handleDecrement}>Decrement</button> */}
  //       <button type="button" onClick={this.handleDecrement}>Decrement</button>
  //     </div>
  //   )
  // }
  // =================================
  // State или состояние
  //  Classic way ---- 
  // constructor() {
  //   super();
  //   this.state = {
  //     value: 100
  //   }
  // }
  // State prom props -----------------
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: this.props.initialValue
  //   }
  // }
  // State на прямую----------------------
  // state = {
  //   value: this.props.initialValue
  // }

  // handleIncrement = () => {
  //   console.log('Increment')
  //   console.log(this);
  // }

  // handleDecrement = () => {
  //   console.log('Decrement')
  //   console.log(this);
  // }

  // render() {
  //   return (
  //     <div>
  //       Counter
  //       <button type="button" onClick={this.handleIncrement}>Increment</button>
  //       <span> {this.state.value} </span>
  //       <button type="button" onClick={this.handleDecrement}>Decrement</button>
  //     </div>
  //   )
  // }

  // ================================
  // // Изменить State
  // state = {
  //   value: this.props.initialValue,
  //   text: 'Hello'
  // }
  // // Правильно
  // // this.setState()
  // // Newer!!!!!
  // // state.value = 30

  // // // Без учета предыдущего ---------------
  // //   handleIncrement = () => {
  // //     console.log('Increment')
  // //     this.setState({
  // //       value: this.state.value + 1
  // //     })
  // //   }
  // // // Без учета предыдущего ----------------
  // //   handleDecrement = () => {
  // //     console.log('Decrement');
  // //     this.setState({
  // //       value: this.state.value - 1
  // //     })
  // //   }
  // // С учетом предыдущего -------------
  // handleIncrement = () => {
  //   console.log('Increment')
  //   this.setState((prevState, props) => {
  //     return {
  //       value: prevState.value + props.step
  //     }
  //   })
  // }
  // // С учетом предыдущего -------------
  // handleDecrement = () => {
  //   console.log('Decrement');
  //   this.setState((prevState, props) => {
  //     return {
  //       value: prevState.value - props.step
  //     }
  //   })
  // }

  // render() {
  //   return (
  //     <div>
  //       Counter
  //       <button type="button" onClick={this.handleIncrement}>Increment</button>
  //       <span> {this.state.value} </span>
  //       <button type="button" onClick={this.handleDecrement}>Decrement</button>
  //     </div>
  //   )
  // }
  // ==============================
  // State hoisting
  state = {
    value: this.props.initialValue,
    text: 'Hello'
  }

  handleIncrement = () => {
    console.log('Increment')
    this.setState((prevState, props) => {
      return {
        value: prevState.value + props.step
      }
    })
  }

  handleDecrement = () => {
    console.log('Decrement');
    this.setState((prevState, props) => {
      return {
        value: prevState.value - props.step
      }
    })
  }

  render() {
    return (
      <div>
        Counter
        <span> {this.state.value} </span>
        <CounterControls
          onIncrement={this.handleIncrement} onDecrement={this.handleDecrement}
        />
      </div>
    )
  }
}

