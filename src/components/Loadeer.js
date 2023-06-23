import React from 'react';
import '../css/Loadeer.css';
import logoRea from '../img/land_image.jpg';

function Loadeer() {
  return (
    <div className="Loadeer">
      <header className="Loadeer-header">
        <img src={logoRea} className="Loadeer-logo" alt="logo" />
        <br />
        <p className="Loadeer-link">
          Therapist details Loadding ....
        </p>
      </header>
    </div>
  );
}

export default Loadeer;
