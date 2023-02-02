import React, { useState } from 'react';
import './App.css';
import Day1 from './components/day1/Day1';
import Day2 from './components/day2/Day2';

function App() {
  const [day, setDay] = useState(0);

  return (
    <div className="App">
      <body className="App-header"> 
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className='App-logo' alt='css'/>
        <p>100 Days CSS Challenge</p>
      </body>
      <div>
        <div className='buttons'>
          <button onClick={() => setDay(1)} className='btn'>Day 1</button>
          <button onClick={() => setDay(2)} className='btn'>Day 2</button>
          <button onClick={() => setDay(3)} className='btn'>Day 3</button>
          <button onClick={() => setDay(4)} className='btn'>Day 4</button>
        </div>
        {day == 1 && <Day1 />}
        {day == 2 && <Day2 />}
        {day == 3 && <Day1 />}
        {day == 4 && <Day2 />}
      </div>
    </div>
  );
}

export default App;
