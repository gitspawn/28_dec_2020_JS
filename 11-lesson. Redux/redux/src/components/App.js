import React from 'react';
import Timer from './Timer/Timer'
import StepSelector from './StepSelector/StepSelector'


const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
};

const App = () => (
  <div style={containerStyle}>
    <Timer />
    <StepSelector />
  </div>
);

export default App;




// const state = {
//   valuee: 5,
//   notes: [],
//   aticles: [],
//   step:{key: 5, value: 5}
// }