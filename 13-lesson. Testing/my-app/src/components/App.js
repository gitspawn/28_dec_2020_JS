import React from 'react';
import Searchbox from './Searchbox';


export default function App() {
  return (
    <Searchbox requestSerch={console.log} />
  );
}
