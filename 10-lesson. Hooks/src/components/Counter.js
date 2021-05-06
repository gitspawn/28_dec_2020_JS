import React, {useState, useEffect} from 'react'


// const [state, setState] = useState(initialState);
// let result = [state, setState]
// result[0]
// result[1]





const Counter = () => {
  let [count, setCount] = useState(0)
  let  handleIncrement = ()=>{
    setCount(count + 1)
  }
  useEffect(()=>{
    console.log('document.title useEffect')
    document.title = `You clicked ${count} times`;
  }, [count])
  // ==========================
  let [textValue, setTextValue] = useState('')
  useEffect(()=>{
    console.log(textValue)
  }, [textValue])
  let handleChange = e =>setTextValue(e.target.value)

  return (
      <div>
        <input type="text" value={textValue} onChange={handleChange}/>
         <p>You clicked {count} times</p>
         <button type="button" onClick={handleIncrement}>
           Increment counter
         </button>
       </div>
    )
}


export default Counter;

// export default class Counter extends Component {
//   state = {
//     count: 0,
//   };

//   handleIncrement = () => {
//     this.setState((state) => ({ count: state.count + 1 }));
//   };

//   componentDidMount() {
//     document.title = `You clicked ${this.state.count} times`;
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.count !== this.state.count) {
//       document.title = `You clicked ${this.state.count} times`;
//     }
//   }

//   render() {
//     return (
//       <div>
//         <p>You clicked {this.state.count} times</p>
//         <button type="button" onClick={this.handleIncrement}>
//           Increment counter
//         </button>
//       </div>
//     );
//   }
// }

// useEffect deps