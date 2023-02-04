import React from 'react';
import './Day2.css';

function Day2() {    
    return (
    <div className='day2'>
      <div className='day-info'>
        Day <span className='day-number'>#2</span>
        <p className='text-info'><span className='challenge-name'>Menú icono:</span> Usado en casi todas las webs hoy en día, simple pero muy animado. Se convierte en el centro de atención.</p>
      </div>
      <div className="frame2">
        <div className="center">
          <a href="#" className="hamburger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </a>
        </div>
      </div>
  </div>
  );
}

export default Day2;