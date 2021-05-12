import React from 'react';
import css from './Timer.module.css';

const Timer = ({ value, step, onIncrement, onDecrement }) => (
  <div className={css.container}>
    <button
      type="button"
      className={css.button}
      onClick={}
    >
      &#8722;
    </button>
    <div className={css.value}>{value} minutes</div>
    <button
      type="button"
      className={css.button}
      onClick={}
    >
      &#43;
    </button>
  </div>
);

export default Timer;
