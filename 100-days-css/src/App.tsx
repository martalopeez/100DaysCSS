import React, { useState } from 'react';
import './App.css';
import { lazy, Suspense } from 'react';
import { IoChevronForward, IoChevronBack } from 'react-icons/io5';

function App() {
  const [day, setDay] = useState(1);
  const Day = lazy(() => import(`./components/day${day}/Day${day}.tsx`));
  return (
    <div className="App">
      <header className="App-header"> 
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className='App-logo' alt='css'/>
        <p>100 Days CSS Challenge</p>
      </header>
      <body className='App-body'>
        <div></div>
        <div className='solution'>
          <Suspense fallback={<div>Cargando solución...</div>}>
            <Day />
          </Suspense>
        </div>
        <div className='buttons'>
          <button onClick={() => setDay(day>1 ? day-1 : 2)} className='btn'><IoChevronBack size={11} /> Anterior</button>
          <button onClick={() => setDay(day<3 ? day+1 : 1)} className='btn'>Siguiente <IoChevronForward size={11} /></button>
        </div>
      </body>
    </div>
  );
}

export default App;
