import React from 'react';


const options = [
  { value: 5, label: '5' },
  { value: 10, label: '10' },
  { value: 15, label: '15' },
];

const StepSelector = ({ value, onChange }) => (
  <div style={{ width: 400 }}>
    <Select options={options} value={value} onChange={onChange} />
  </div>
);

