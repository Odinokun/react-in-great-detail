import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Rating/>
    </div>
  );
}

function Rating() {
  return(
      <div>
        <span>star</span>
        <span>star</span>
        <span>star</span>
        <span>star</span>
        <span>star</span>
      </div>
  )
}

export default App;
