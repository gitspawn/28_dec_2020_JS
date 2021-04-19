import React, { Component } from 'react'

export default class SearchForm extends Component {
  state = {
    inputValue: ''
  }



  handleChange = (event)=>{
    // console.log(event.target.value)
    this.setState({inputValue:event.target.value})
  }

  handleSubmit = (event)=>{
    event.preventDefault()
      // console.log('Form submit...')
      // console.log(this.state.inputValue)
      this.props.onSubmit(this.state.inputValue)
      this.setState({inputValue:''})
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      {/* <form onSubmit={ ()=> this.props.onSubmit(this.state.inputValue)}> */}
        <label>
          <input 
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Search</button>
      </form>
    )
  }
}
