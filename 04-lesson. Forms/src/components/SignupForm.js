import React, { Component } from 'react';


// Контролируемый элемент
// export default class SignupForm extends Component {
//   state = {
//     inputValue: '',
//   }
//   handleInputChange = (event) => {
//     // console.log(event)
//     // console.log(event.target.value)
//     this.setState({ inputValue: event.target.value })
//   }

//   render() {
//     return (
//       <div>
//         {/* <form onChange={ }></form> */}
//         <input type="text" value={this.state.inputValue} onChange={this.handleInputChange} />
//       </div>
//     )
//   }
// }

// // onChange = {} event = input

// ========================
// Signup Form


const Subscription = {
  FREE: 'free',
  PRO: 'pro',
  PREMIUM: 'premium'
}


export default class SignupForm extends Component {
  state = {
    email: '',
    password: '',
    subscription: '',
    agreed: false,
    age: ''
  }

  // handleEmailChange = (event) => {
  //   console.log(event.target.value)
  //   this.setState({ email: event.target.value })
  // }

  // handlePasswordChange = (event) => {
  //   console.log(event.target.value)
  //   this.setState({ password: event.target.value })
  // }


  handleChange = (event) => {
    // console.log(event.target.value)
    // console.log(event.target.name)
    let { name, value } = event.target
    // console.log(name)
    // console.log(value)
    this.setState({
      [name]: value
    })
  }


  handleSubscriptionChange = (event) => {
    this.setState({
      subscription: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event)

  }

  handleAgreedChenge = (event) => {
    // console.log(event.target.checked)
    this.setState({
      agreed: event.target.checked
    })
  }

  handleAgeChange = (event) => {
    this.setState({
      age: event.target.value
    })
  }

  render() {
    let { email, password, subscription, agreed, age } = this.state

    // console.log('agreed', agreed)
    // subscription = this.state.subscription.FREE
    // subscription = this.state.subscription.PRO

    return (
      <form onSubmit={this.handleSubmit}>
        {/* <input type="email" value={email} name="email" onChange={this.handleEmailChange} /> */}
        {/* <input type="email" value={email} name="email" onChange={this.handleChange} /> */}
        {/* <input type="password" value={password} name="password" onChange={this.handlePasswordChange} /> */}
        {/* <input type="password" value={password} name="password" onChange={this.handleChange} /> */}


        {/* <label id='123123'>Email</label>
        <input for="123123" type="email" value={email} name="email" onChange={this.handleChange} /> */}


        <label>
          Email
          <input type="email" value={email} name="email" onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Password
           <input type="password" value={password} name="password" onChange={this.handleChange} />
        </label>
        <br />
        {/* Radio Button */}
        <div role="group">
          <label>
            Free
          <input type="radio" value={Subscription.FREE} checked={Subscription.FREE === subscription} onChange={this.handleSubscriptionChange} />
          </label>
          <label>
            Pro
          <input type="radio" value={Subscription.PRO} checked={Subscription.PRO === subscription} onChange={this.handleSubscriptionChange} />
          </label>
          <label>
            Premium
          <input type="radio" value={Subscription.PREMIUM} checked={Subscription.PREMIUM === subscription} onChange={this.handleSubscriptionChange} />
          </label>
        </div>
        <br />
        {/* Select */}
        <label >
          Choose our Age
           <select name="age" value={age} onChange={this.handleAgeChange}>
            <option value='' disabled>Choose option</option>
            <option value='18-26'>18-26</option>
            <option value='26-35'>26-35</option>
            <option value="36+">36+</option>
          </select>
        </label>
        <br />

        {/* Checkbox */}
        <label>
          Принимаю
          <input
            type="checkbox"
            checked={agreed}
            onChange={this.handleAgreedChenge} />
        </label>
        <br />
        <button type="submit" disabled={!agreed} >Submit! </button>
      </form >
    )
  }
}


// let vova = {
//   name: 'VOva',
//   age: 23
// }

// // vova.name
// vova['name']
