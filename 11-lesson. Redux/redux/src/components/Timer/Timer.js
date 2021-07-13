import React from 'react';
import css from './Timer.module.css';
import {connect} from 'react-redux'
import * as timerActions from '../../redux/timerActions'

const Timer = ({ value, step, onIncrement, onDecrement }) => (
  <div className={css.container}>
    <button
      type="button"
      className={css.button}
      onClick={() => onDecrement(step)}
    >
      &#8722;
    </button>
    <div className={css.value}>{value} minutes</div>
    <button
      type="button"
      className={css.button}
      onClick={() => onIncrement(step)}
    >
      &#43;
    </button>
  </div>
);

const mapState = state => ({
    value: state.timer.value,
    step: state.timer.step.value
  })


  // const mapDispatch = dispatch => ({
  //   onIncrement: step => dispatch(timerActions.increment(step)),
  //   onDecrement: step => dispatch(timerActions.decrement(step))
  // })

  const mapDispatch ={
    onIncrement: timerActions.increment,
    onDecrement: timerActions.decrement
  }


  // (data)=>console.log(data)

export default connect(mapState, mapDispatch)(Timer)

// export default Timer;
// Подключить компоненты с connect(mapState, mapDispatch)(BaseComponent)