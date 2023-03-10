import React from 'react';
import './Day3.css';

function Day3() {    
    return (
    <div className='day3'>
      <div className='day-info'>
        Day <span className='day-number'>#3</span>
        <p className='text-info'><span className='challenge-name'>La pirámide:</span> No tan desafiante como las pirámides que hay en Egipto, pero el camino de las sombras no es fácil.</p>
      </div>
      <div className="frame3">
        <div className="center">
          <div className="circle">
            <div className="sky"></div>
            <div className="sand"></div>
            <div className="pyramid-left"></div>
            <div className="pyramid-right"></div>
            <div className="sun"></div>
            <div className="shadow"></div>
          </div>
        </div>
    </div>
  </div>
  );
}

export default Day3;