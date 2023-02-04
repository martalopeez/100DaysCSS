import React from 'react';
import './Day1.css';

function Day1() {
  return (
    <div className='day1'>
      <div className='day-info'>
        Day <span className='day-number'>#1</span>
        <p className='text-info'><span className='challenge-name'>100 Días CSS:</span> Un comienzo fácil para el desafío, con un número personalizado y un gradiente.</p>
      </div>
      <div className="frame1">
        <div className="center">
          <div className="number">
            <div className="one-one"></div>
            <div className="one-two"></div>
            <div className="zero-one"></div>
            <div className="zero-two"></div>
          </div>
        </div>
        <span className="big">DAYS</span><br></br>
        <span className="small">CSS CHALLENGE</span>
      </div>
    </div>  
  );
}
  
export default Day1;