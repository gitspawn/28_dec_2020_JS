import React, { useState, useEffect, useRef } from 'react';

const styles = {
  clockface: {
    fontSize: 32,
    fontWeight: 500,
  },
};



let Clock = () => {
  let [time, setTime] = useState(new Date());

  const indervalId = useRef()

  console.log(indervalId)

  useEffect(() => {
    console.log('useEffect')
    indervalId.current = setInterval(() => {
      setTime( new Date() );
    }, 3000);

    return ()=>{
      console.log('clear before next useEffect')
      clearInterval(indervalId.current)
    }
  }, []);

  return (
    <p style={styles.clockface}>
      Current time: {time.toLocaleTimeString()}
    </p>
  );
};

export default Clock



// export default class Clock extends Component {
//   state = {
//     time: new Date(),
//   };

//   intervalId = null;

//   componentDidMount() {
//     this.intervalId = setInterval(() => {
//       this.setState({ time: new Date() });
//     }, 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.intervalId);
//   }

//   render() {
//     return (
//       <p style={styles.clockface}>
//         Current time: {this.state.time.toLocaleTimeString()}
//       </p>
//     );
//   }
// }



class User {
  static age = 10

  constructor(name){
    this.name = name
  }

  getAge(){console.log(this.name)}
}